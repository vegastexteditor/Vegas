#!/bin/bash
#find ../src/modules \! \( -type d \) -iname "*.js" | xargs -0 jslint 
find ../src/modules \! \( -type d \) -iname "*.js" | perl -p -e "s/\\n/\\0/;" | xargs -0 jslint | less
