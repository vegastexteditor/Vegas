echo "Checking for build dependencies"

has_npm=`which npm| grep -c npm`
if [ "$has_npm" -eq "0" ]; then
  echo "You must have nodejs/npm installed in order to run the build script."
fi

has_jshint=`which jshint | grep -c jshint`
if [ "$has_jshint" -eq "0" ]; then
  echo "installing jshint"
  npm install -g jshint
else
  echo "jshint installed"
fi

has_jake=`which jake | grep -c jake`
if [ "$has_jake" -eq "0" ]; then
  echo "installing jake"
  npm install -g jake
else
  echo "jake installed"
fi

npm install -g walk
