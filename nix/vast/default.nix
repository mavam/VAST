{ stdenv
, lib
, vast-source
, nix-gitignore
, nix-gitDescribe
, cmake
, cmake-format
, pkgconfig
, git
, pandoc
, caf
, libpcap
, libyaml-cpp
, arrow-cpp
, flatbuffers
, broker
, jemalloc
, python3
, jq
, tcpdump
, utillinux
, static ? stdenv.hostPlatform.isMusl
, versionOverride ? null
, disableTests ? true
}:
let
  isCross = stdenv.buildPlatform != stdenv.hostPlatform;

  py3 = (let
    python = let
      packageOverrides = final: prev: {
        # See https://github.com/NixOS/nixpkgs/pull/96037
        coloredlogs = prev.coloredlogs.overridePythonAttrs (old: rec {
          doCheck = !stdenv.isDarwin;
          checkInputs = with prev; [ pytest mock utillinux verboselogs capturer ];
          pythonImportsCheck = [ "coloredlogs" ];

          propagatedBuildInputs = [ prev.humanfriendly ];
        });
      };
    in python3.override {inherit packageOverrides; self = python;};

  in python.withPackages(ps: with ps; [
    coloredlogs
    jsondiff
    pyarrow
    pyyaml
    schema
  ]));

  src = vast-source;

  version = if (versionOverride != null) then versionOverride else stdenv.lib.fileContents (nix-gitDescribe src);
in

stdenv.mkDerivation rec {
  inherit src version;
  pname = "vast";

  preConfigure = ''
    substituteInPlace cmake/FindPCAP.cmake \
      --replace /bin/sh "${stdenv.shell}" \
      --replace nm "''${NM}"
  '';

  nativeBuildInputs = [ cmake cmake-format ];
  propagatedNativeBuildInputs = [ pkgconfig pandoc ];
  buildInputs = [ libpcap flatbuffers libyaml-cpp jemalloc broker ];
  propagatedBuildInputs = [ arrow-cpp caf ];

  cmakeFlags = [
    "-DCMAKE_INSTALL_SYSCONFDIR:PATH=/etc"
    "-DCMAKE_FIND_PACKAGE_PREFER_CONFIG=ON"
    "-DCAF_ROOT_DIR=${caf}"
    "-DVAST_RELOCATABLE_INSTALL=OFF"
    "-DVAST_VERSION_TAG=${version}"
    "-DVAST_USE_JEMALLOC=ON"
    "-DBROKER_ROOT_DIR=${broker}"
    # gen-table-slices runs at build time
    "-DCMAKE_SKIP_BUILD_RPATH=OFF"
  ] ++ lib.optionals static [
    "-DVAST_STATIC_EXECUTABLE:BOOL=ON"
    "-DCMAKE_INTERPROCEDURAL_OPTIMIZATION:BOOL=ON"
  ] ++ lib.optional disableTests "-DBUILD_UNIT_TESTS=OFF";

  hardeningDisable = lib.optional static "pic";

  doCheck = false;
  checkTarget = "test";

  dontStrip = true;

  doInstallCheck = true;
  installCheckInputs = [ py3 jq tcpdump ];
  installCheckPhase = ''
    python ../integration/integration.py --app ${placeholder "out"}/bin/vast
  '';

  meta = with lib; {
    description = "Visibility Across Space and Time";
    homepage = http://vast.io/;
    license = licenses.bsd3;
    platforms = platforms.unix;
    maintainers = with maintainers; [ tobim ];
  };
}
