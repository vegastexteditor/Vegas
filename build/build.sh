#!/bin/bash
source ./build/build_dependencies.sh
node build/r.js -o build/requireConfig.js name=main out=built/main-built.js
