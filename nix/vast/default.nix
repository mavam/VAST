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
, arrow-cpp
, flatbuffers
, spdlog
, libyamlcpp
, simdjson
, robin-map
, jemalloc
, libunwind
, zeek-broker
, python3
, jq
, tcpdump
, utillinux
, versionOverride ? null
, withPlugins ? []
, extraCmakeFlags ? []
, disableTests ? true
, buildType ? "Release"
}:
let
  inherit (stdenv.hostPlatform) isStatic;
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

  version = if (versionOverride != null) then versionOverride else lib.fileContents (nix-gitDescribe src);

in

stdenv.mkDerivation rec {
  inherit src version;
  pname = "vast";

  preConfigure = ''
    substituteInPlace plugins/pcap/cmake/FindPCAP.cmake \
      --replace /bin/sh "${stdenv.shell}" \
      --replace nm "''${NM}"
  '';

  nativeBuildInputs = [ cmake cmake-format ];
  propagatedNativeBuildInputs = [ pkgconfig pandoc ];
  buildInputs = [
    jemalloc
    libyamlcpp
    simdjson
    spdlog
    robin-map
    libunwind
  ] ++ (if (toString (lib.intersectLists [ "plugins/pcap" ] withPlugins)) == "plugins/pcap" then [ libpcap ] else [])
   ++ (if (toString (lib.intersectLists [ "plugins/broker" ] withPlugins)) == "plugins/broker" then [ zeek-broker ] else []);
  propagatedBuildInputs = [ arrow-cpp caf flatbuffers ];

  cmakeFlags = [
    "-DCMAKE_BUILD_TYPE:STRING=${buildType}"
    "-DCMAKE_FIND_PACKAGE_PREFER_CONFIG=ON"
    "-DVAST_VERSION_TAG=${version}"
    "-DVAST_ENABLE_RELOCATABLE_INSTALLATIONS=${if isStatic then "ON" else "OFF"}"
    "-DVAST_ENABLE_BACKTRACE=ON"
    "-DVAST_ENABLE_JEMALLOC=ON"
    "-DVAST_ENABLE_LSVAST=ON"
    "-DCAF_ROOT_DIR=${caf}"
  ] ++ lib.optionals (buildType == "CI") [
    "-DVAST_ENABLE_ASSERTIONS=ON"
  ] ++ lib.optionals isStatic [
    "-DBUILD_SHARED_LIBS:BOOL=OFF"
    "-DVAST_ENABLE_STATIC_EXECUTABLE:BOOL=ON"
    "-DCMAKE_INTERPROCEDURAL_OPTIMIZATION:BOOL=ON"
  ] ++ lib.optional disableTests "-DVAST_ENABLE_UNIT_TESTS=OFF"
  # Plugin Section
  ++ lib.optionals (withPlugins != []) [ #Exp: ["plugins/broker" "plugins/pcap"]
    "-DVAST_PLUGINS=${lib.concatImapStringsSep ";" (pos: x: "${src}/" + x ) withPlugins}"
    "-DVAST_ENABLE_STATIC_PLUGINS=ON"
  ]
  ++ extraCmakeFlags ;

  hardeningDisable = lib.optional isStatic "pic";

  doCheck = false;
  checkTarget = "test";

  dontStrip = true;

  doInstallCheck = true;
  installCheckInputs = [ py3 jq tcpdump ];
  installCheckPhase = ''
    python ../vast/integration/integration.py --app ${placeholder "out"}/bin/vast
  '';

  meta = with lib; {
    description = "Visibility Across Space and Time";
    homepage = http://vast.io/;
    license = licenses.bsd3;
    platforms = platforms.unix;
    maintainers = with maintainers; [ tobim ];
  };
}
