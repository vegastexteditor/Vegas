#!/bin/bash
source ./build/build_dependencies.sh
node build/r.js -o baseUrl=src/modules paths.main=../main paths.vegas=../vegas paths.underscore=../libraries/underscore/underscore name=main out=built/main-built.js
