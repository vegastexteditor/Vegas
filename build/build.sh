#!/bin/bash

(
  # Go into the directory of where this file is located
  cd `dirname $0`
  BUILD_DIR=`pwd` # and this is the build directory

  cd ../ # up one directory
  PROJECT_DIR=`pwd` # is the project directory

  # Built directory is where all the output files of the build process goes
  cd built
  BUILT_DIR=`pwd` # and assign the built directory

  # Src directory is where all the source files are located
  cd ../src
  SRC_DIR=`pwd`

  # Themes directory contains some files which may not be ready to be compiled
  cd themes
  THEME_DIR=`pwd`

  echo "PROJECT_DIR: $PROJECT_DIR"
  echo "BUILD_DIR: $BUILD_DIR"
  echo "BUILT_DIR: $BUILT_DIR"
  echo "SRC_DIR: $SRC_DIR"
  echo "THEME_DIR: $THEME_DIR"

  # Get and install dependencies required to build and run the application
  echo "*** Building dependencies"
  source $BUILD_DIR/build_dependencies.sh

  # Build the application using the build configuration

  # node build/r.js
  #   Use r.js to concat and minify dependencies into one file:
  #   http://requirejs.org/docs/optimization.html

  # -o build/requireConfig.js
  #   Use specific require configuration file building.

  # name=main
  #   Build out dependencies from the main.js file located at src/main.js

  # out=built/main-built.js
  #   Output the concatenated and minified javascript file to the build directory
  #   so that vegas.html can read it in.
  echo "*** Concating and minifying dependencies"
  node $BUILD_DIR/r.js -o $BUILD_DIR/requireConfig.js name=main out=$BUILT_DIR/main-built.js

  echo "*** Copying over themes"
  rm -rf $BUILT_DIR/themes/*
  cp -R $THEME_DIR/ $BUILT_DIR/themes
)

