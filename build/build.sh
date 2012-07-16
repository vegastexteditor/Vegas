#!/bin/bash
source ./build/build_dependencies.sh
node r.js -o baseUrl=src/modules paths.main=../main paths.vegas=../vegas paths.underscore=../libraries/underscore/underscore name=main out=main-built.js
