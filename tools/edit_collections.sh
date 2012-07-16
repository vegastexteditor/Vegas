#!/bin/bash
find ../src/modules \! \( -type d \) -iname "*collection*" | xargs vim -p 
