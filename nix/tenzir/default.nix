{callPackage, ...} @ args: let
  pkgFun = {
    self,
    lib,
    stdenv,
    callPackage,
    pname,
    tenzir-source,
    cmake,
    ninja,
    pkg-config,
    poetry,
    lld,
    boost,
    caf,
    curl,
    libpcap,
    arrow-cpp,
    arrow-adbc-cpp,
    aws-sdk-cpp-tenzir,
    azure-sdk-for-cpp,
    fast-float,
    flatbuffers,
    fluent-bit,
    protobuf,
    google-cloud-cpp,
    grpc,
    spdlog,
    libyamlcpp,
    simdjson,
    robin-map,
    jemalloc,
    libunwind,
    xxHash,
    rabbitmq-c,
    yara,
    rdkafka,
    cppzmq,
    libmaxminddb,
    re2,
    dpkg,
    rpm,
    restinio,
    llhttp,
    pfs,
    extraPlugins ? [],
    symlinkJoin,
    extraCmakeFlags ? [],
    python3,
    uv,
    pkgsBuildHost,
    makeBinaryWrapper,
    isReleaseBuild ? false,
  }: let
    inherit (stdenv.hostPlatform) isMusl isStatic;

    version = (builtins.fromJSON (builtins.readFile ./../../version.json)).tenzir-version;

    extraPlugins' = map (x: "extra-plugins/${baseNameOf x}") extraPlugins;
    bundledPlugins =
      [
        "plugins/amqp"
        "plugins/azure-blob-storage"
        "plugins/fluent-bit"
        "plugins/from_velociraptor"
        "plugins/gcs"
        "plugins/google-cloud-pubsub"
        "plugins/kafka"
        "plugins/nic"
        "plugins/parquet"
        "plugins/s3"
        "plugins/sigma"
        "plugins/sqs"
        "plugins/web"
        "plugins/zmq"
      ]
      # Temporarily disable yara on the static mac build because of issues
      # building protobufc.
      ++ lib.optionals (!(stdenv.hostPlatform.isDarwin && isStatic)) [
        "plugins/yara"
      ];
    py3 = let
      p = if stdenv.buildPlatform.canExecute stdenv.hostPlatform
        then pkgsBuildHost.python3
        else python3;
    in
      p.withPackages (ps:
        with ps; [
          aiohttp
          dynaconf
          pandas
          pyarrow
          python-box
          pip
        ]);
  in
    stdenv.mkDerivation (finalAttrs: ({
        inherit pname version;
        src = tenzir-source;

        postUnpack = ''
          ${pkgsBuildHost.file}/bin/file /bin/sh
          mkdir -p source/extra-plugins
          for plug in ${lib.concatStringsSep " " extraPlugins}; do
            cp -R $plug source/extra-plugins/$(basename $plug)
          done
          chmod -R u+w source/extra-plugins
        '';

        outputs = ["out"] ++ lib.optionals isStatic ["package"];

        nativeBuildInputs = [
          cmake
          ninja
          dpkg
          protobuf
          grpc
          poetry
          makeBinaryWrapper
        ] ++ lib.optionals stdenv.isLinux [
          rpm
        ] ++ lib.optionals stdenv.hostPlatform.isDarwin [
          lld
        ];
        propagatedNativeBuildInputs = [pkg-config];
        buildInputs = [
          aws-sdk-cpp-tenzir
          fast-float
          fluent-bit
          google-cloud-cpp
          grpc
          libpcap
          libunwind
          libyamlcpp
          protobuf
          rabbitmq-c
          rdkafka
          cppzmq
          (restinio.override {
            with_boost_asio = true;
          })
          llhttp
        ] ++ lib.optionals isStatic [
          azure-sdk-for-cpp
        ] ++ lib.optionals stdenv.isLinux [
          pfs
        ] ++ lib.optionals (!(stdenv.hostPlatform.isDarwin && isStatic)) [
          yara
        ];
        propagatedBuildInputs = [
          arrow-cpp
          boost
          caf
          curl
          flatbuffers
          libmaxminddb
          re2
          robin-map
          simdjson
          spdlog
          xxHash
        ] ++ lib.optionals (!isStatic) [
          arrow-adbc-cpp
        ] ++ lib.optionals isMusl [
          jemalloc
        ];

        env = {
          POETRY_VIRTUALENVS_IN_PROJECT = 1;
          NIX_LDFLAGS = let
            lto-cache = {
              cctools = "-cache_path_lto,$TMPDIR";
              gold = "-plugin-opt,cache-dir=$TMPDIR";
              lld = "--thinlto-cache-dir=$TMPDIR";
            };
          in
            # Speed up the second linking for the packag
            lib.optionalString (stdenv.cc.isClang) (lto-cache.${stdenv.hostPlatform.linker} or "");
        };
        cmakeFlags =
          [
            "-DCMAKE_FIND_PACKAGE_PREFER_CONFIG=ON"
            "-DCAF_ROOT_DIR=${caf}"
            "-DTENZIR_EDITION_NAME=${lib.toUpper pname}"
            "-DTENZIR_ENABLE_RELOCATABLE_INSTALLATIONS=ON"
            "-DTENZIR_ENABLE_BACKTRACE=ON"
            "-DTENZIR_ENABLE_JEMALLOC=${lib.boolToString isMusl}"
            "-DTENZIR_ENABLE_MANPAGES=OFF"
            "-DTENZIR_ENABLE_BUNDLED_AND_PATCHED_RESTINIO=OFF"
            "-DTENZIR_ENABLE_BUNDLED_UV=${lib.boolToString isStatic}"
            "-DTENZIR_ENABLE_FLUENT_BIT_SO_WORKAROUNDS=OFF"
            "-DTENZIR_PLUGINS=${lib.concatStringsSep ";" (bundledPlugins ++ extraPlugins')}"
            # Disabled for now, takes long to compile and integration tests give
            # reasonable coverage.
            "-DTENZIR_ENABLE_UNIT_TESTS=OFF"
            "-DTENZIR_ENABLE_BATS_TENZIR_INSTALLATION=OFF"
            "-DTENZIR_GRPC_CPP_PLUGIN=${lib.getBin pkgsBuildHost.grpc}/bin/grpc_cpp_plugin"
          ] ++ lib.optionals isStatic [
            "-UCMAKE_INSTALL_BINDIR"
            "-UCMAKE_INSTALL_SBINDIR"
            "-UCMAKE_INSTALL_INCLUDEDIR"
            "-UCMAKE_INSTALL_OLDINCLUDEDIR"
            "-UCMAKE_INSTALL_MANDIR"
            "-UCMAKE_INSTALL_INFODIR"
            "-UCMAKE_INSTALL_DOCDIR"
            "-UCMAKE_INSTALL_LIBDIR"
            "-UCMAKE_INSTALL_LIBEXECDIR"
            "-UCMAKE_INSTALL_LOCALEDIR"
            "-DCMAKE_INSTALL_PREFIX=/opt/tenzir"
            "-DCMAKE_INTERPROCEDURAL_OPTIMIZATION:BOOL=${lib.boolToString stdenv.hostPlatform.isLinux}"
            "-DCPACK_GENERATOR=${if stdenv.hostPlatform.isDarwin then "TGZ;productbuild" else "TGZ;DEB;RPM"}"
            "-DTENZIR_UV_PATH:STRING=${lib.getExe uv}"
            "-DTENZIR_ENABLE_STATIC_EXECUTABLE:BOOL=ON"
            "-DTENZIR_PACKAGE_FILE_NAME_SUFFIX=static"
            "-DTENZIR_ENABLE_BACKTRACE=${lib.boolToString (!stdenv.hostPlatform.isDarwin)}"
          ]
          ++ lib.optionals stdenv.hostPlatform.isx86_64 [
            "-DTENZIR_ENABLE_SSE3_INSTRUCTIONS=ON"
            "-DTENZIR_ENABLE_SSSE3_INSTRUCTIONS=ON"
            "-DTENZIR_ENABLE_SSE4_1_INSTRUCTIONS=ON"
            "-DTENZIR_ENABLE_SSE4_1_INSTRUCTIONS=ON"
            # AVX and up is disabled for compatibility.
            "-DTENZIR_ENABLE_AVX_INSTRUCTIONS=OFF"
            "-DTENZIR_ENABLE_AVX2_INSTRUCTIONS=OFF"
          ]
          ++ lib.optionals stdenv.hostPlatform.isDarwin (
          let
            compilerName =
              if stdenv.cc.isClang
              then "clang"
              else if stdenv.cc.isGNU
              then "gcc"
              else "unknown";
            # ar with lto support
            ar = stdenv.cc.bintools.targetPrefix + {
              "clang" = "ar";
              "gcc" = "gcc-ar";
              "unknown" = "ar";
            }."${compilerName}";
            # ranlib with lto support
            ranlib = stdenv.cc.bintools.targetPrefix + {
              "clang" = "ranlib";
              "gcc" = "gcc-ranlib";
              "unknown" = "ranlib";
            }."${compilerName}";
          in [
            # Want's to install into the users home, but that would be the
            # builder in the Nix context, and that doesn't make sense.
            "-DTENZIR_ENABLE_INIT_SYSTEM_INTEGRATION=OFF"
          ])
          ++ extraCmakeFlags;

        # TODO: Omit this for "tagged release" builds.
        preConfigure = if isReleaseBuild then ''
          cmakeFlagsArray+=("-DTENZIR_VERSION_BUILD_METADATA=")
        ''
        else ''
          version_build_metadata=$(basename $out | cut -d'-' -f 1)
          cmakeFlagsArray+=("-DTENZIR_VERSION_BUILD_METADATA=N$version_build_metadata")
        ''
        # TODO: Fix LTO on darwin by passing these commands by their original
        # executable names "llvm-ar" and "llvm-ranlib". Should work with
        # `readlink -f $AR` to find the correct ones.
          + lib.optionalString stdenv.hostPlatform.isDarwin ''
          cmakeFlagsArray+=("-DCMAKE_C_COMPILER_AR=$AR")
          cmakeFlagsArray+=("-DCMAKE_CXX_COMPILER_AR=$AR")
          cmakeFlagsArray+=("-DCMAKE_C_COMPILER_RANLIB=$RANLIB")
          cmakeFlagsArray+=("-DCMAKE_CXX_COMPILER_RANLIB=$RANLIB")
        ''
        ;

        hardeningDisable = lib.optionals isStatic [
          "fortify"
          "pic"
        ];

        preBuild = lib.optionalString (isStatic && stdenv.hostPlatform.isLinux) ''
          # Needed for the RPM package.
          mkdir -p .var/lib
          export HOME=$(mktemp -d)
          cat << EOF > $HOME/.rpmmacros
          %_var                 $PWD/.var
          %_buildshell          $SHELL
          %_topdir              $PWD/rpmbuild
          %__strip              true
          EOF
          rpmdb --rebuilddb
        '';

        postBuild = lib.optionalString isStatic ''
          ${pkgsBuildHost.nukeReferences}/bin/nuke-refs bin/*
        '';

        # Checking is done in a dedicated derivation, see check.nix.
        doCheck = false;
        doInstallCheck = false;

        dontStrip = true;

        postInstall = ''
          wrapProgram $out/bin/tenzir \
            --prefix PATH : ${lib.makeBinPath ([ py3.python ]
            # The static binary bundles uv.
             ++ lib.optionals (!isStatic) [ uv ])} \
            --suffix PYTHONPATH : ${py3}/${py3.sitePackages}
        '';

        passthru = {
          plugins = bundledPlugins ++ extraPlugins;
          withPlugins = selection: let
            allPlugins = callPackage ./plugins {tenzir = self;};
            actualPlugins = selection allPlugins;
          in
            if isStatic
            then
              self.override {
                extraPlugins = map (x: x.src) actualPlugins;
              }
            else
              symlinkJoin {
                inherit (self) passthru meta pname version name;
                paths = [ self ] ++ actualPlugins;
              };
        };

        meta = with lib; {
          description = "Open Source Security Data Pipelines";
          homepage = "https://www.tenzir.com/";
          # Set mainProgram so that all editions work with `nix run`.
          mainProgram = "tenzir";
          license = licenses.bsd3;
          platforms = platforms.unix;
          maintainers = with maintainers; [tobim];
        };
      }
      # disallowedReferences does not work on darwin.
      // lib.optionalAttrs (isStatic && stdenv.isLinux) {
        #disallowedReferences = [ tenzir-source ] ++ extraPlugins;
      }
      // lib.optionalAttrs isStatic {
        __noChroot = stdenv.hostPlatform.isDarwin;

        buildPhase = ''
          runHook preBuild
        ''
          # TODO: Check if we need this and comment if yes.
          + lib.optionalString stdenv.hostPlatform.isDarwin
        ''
          PATH=$PATH:/usr/bin
        '' + ''

          cmake --build . --target package --parallel $NIX_BUILD_CORES
          rm -rf package/_CPack_Packages

          runHook postBuild
        '';
        installPhase = ''
          runHook preInstall

          install -m 644 -Dt $package package/*

          mkdir -p $out
          tar -xf package/*.tar.gz --strip-components=2 -C $out

          runHook postInstall
        '';
      }));
  self' = callPackage pkgFun ({self = self';} // args);
in
  self'
