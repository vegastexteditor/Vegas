(function (global) {

  global.vegas = global.vegas || {};

  global.vegas.uncompiled = true;

  vegas.getFlavorName = function () {
    return vegas.settings.flavor;
  };

  vegas.fetchFlavor = function (flavorName, callback) {
    var flavorName1 = flavorName;
    vegas.loadScript('flavors/' + flavorName + '/flavor.js', function () {
      callback.call(this, vegas.flavors[vegas.getFlavorName()]);
    });
  };

  vegas.getFlavor = function () {
    return vegas.flavors[vegas.getFlavorName()];
  };

  vegas.getThemeName = function () {
    return vegas.getFlavor().theme;
  };

  vegas.fetchThemeTemplates = function (callback) {
    vegas.fetchThemeInfoFile(function (theme) {

      var templatesLoaded = 0;

      theme.templates.forEach(function (templateName) {
        var themeName = vegas.getThemeName();
        var templateFile = 'themes/' + themeName + '/templates/' + templateName + '.html';

         jQuery.ajax({
           url: templateFile,
           dataType: "html",
           success: function(template){
             vegas.templates = vegas.templates || {};
             vegas.templates[templateName] = template;
             templatesLoaded++;
             if (templatesLoaded == theme.templates.length) {
               callback.call(vegas);
             }
           }
        });

      });

    });
  };

  vegas.fetchThemeInfoFile = function (callback) {
    var themeName  = vegas.getThemeName();
    vegas.loadScript('themes/' + themeName + '/theme.js', function () {
      callback.call(this, vegas.themes[vegas.getThemeName()]);
    });
  };

  vegas.getInfoFiles = function () {
    // Gather a list of library info files (*.library.js's)
    var infoFiles = [];
    var flavor = vegas.getFlavor();

    flavor.libraries.forEach(function (library) {
      infoFiles.push('library/' + library + '/' + library + '.library.js');
    });

    flavor.modules.forEach(function (module) {
      infoFiles.push('modules/' + module + '/' + module  + '.module.js');
    });


    return infoFiles
  };

  vegas.fetchInfoFiles = function (callback) {
    var infoFiles = vegas.getInfoFiles();

    vegas.libraries = vegas.libraries || {};
    vegas.modules= vegas.modules || {};

    vegas.loadScripts(infoFiles, function () {
      callback.call(this, callback);
    });
  };

  vegas.getModuleFiles = function () {
    var files = {};
    var file;

    for (module in vegas.modules) {
      info = vegas.modules[module];
      info.files.forEach(function (file) {
        files[file.name] = file;
      });
    }

    for (library in vegas.libraries) {
      info = vegas.libraries[library];
      info.files.forEach(function (file) {
        files[file.name] = file;
      });
    }

    return files;
  }


  var moduleFiles = false;
  var requiredFiles = [];

  function in_array(array, id) {
      for(var i=0; i <array.length; i++) {
          if(array[i] === id) {
              return true;
          }
      }
      return false;
  }

  function getRequiredFiles(file) {

    moduleFiles = moduleFiles || vegas.getModuleFiles()

    file.requires.forEach(function (requiredFileName) {

      var requiredFileInfo = moduleFiles[requiredFileName]

      if (!in_array(requiredFiles, requiredFileInfo.name)) {
        requiredFiles.push(requiredFileInfo.name);
      }
      return getRequiredFiles(requiredFileInfo);
    });

    if (!in_array(requiredFiles, file.name)) {
      requiredFiles.push(file.name);
    }

    return requiredFiles;
  }

  vegas.getModuleFilesByDependencyOrder = function () {
    var filesOrderedByDependencies = [];

    for (moduleName in vegas.modules) {
      var module = vegas.modules[moduleName]
      module.files.forEach(function (file) {
        getRequiredFiles(file);
      });
    }

    return requiredFiles;

  };

  vegas.getFilesByDependencyOrder = function () {
    var modules = vegas.getModuleFilesByDependencyOrder();
    var moduleInfos = vegas.getModuleFiles()

    var files = [];
    modules.forEach(function (module) {
      if (moduleInfos[module]) {
        files.push(moduleInfos[module].src);
      }
    });

    return files;

  };

  function bootstrap() {

  }

  function init() {

    // Make sure LABjs is loaded
    loadLAB(function () {

      // Get scripts scripts sorted by their dependencies
      //var scripts = vegas.getScripts() || [];

      vegas.fetchSettings(function (settings) {
        var flavorName = vegas.getFlavorName();
        vegas.fetchFlavor(flavorName, function () {
          vegas.fetchInfoFiles(function () {

            var moduleFiles = vegas.getModuleFiles();
            var files = vegas.getFilesByDependencyOrder();
            vegas.loadScripts(files, function () {
              vegas.fetchThemeTemplates(function () {
                vegas.onready();
              });
            });
          });
        });
      });

    });

  }

  var labOptionsSet = false;
  function setLabOptions() {

    labOptionsSet = true;

    $LAB.setGlobalDefaults({
      ErrorHandler: function(err){
          throw err;
      },
      UseLocalXHR: false,
      CacheBust: true,
      AlwaysPreserveOrder: true
    });

  }

  function loadLAB(callback) {

    var doc = global.document;

    var head = doc.head || doc.getElementsByTagName("head");

    setTimeout(function() {
      if ("item" in head) { // check if ref is still a live node list
        if (!head[0]) { // append_to node not yet ready
          setTimeout(arguments.callee, 25);
          return;
        }
        head = head[0]; // reassign from live node list ref to pure node ref -- avoids nasty IE bug where changes to DOM invalidate live node lists
      }
      var scriptElem = doc.createElement("script"),
        scriptdone = false;
      scriptElem.onload = scriptElem.onreadystatechange = function() {
        if ((scriptElem.readyState && scriptElem.readyState !== "complete" && scriptElem.readyState !== "loaded") || scriptdone) {
          return false;
        }
        scriptElem.onload = scriptElem.onreadystatechange = null;
        scriptdone = true;
        callback.call(this);
      };
      scriptElem.src = "library/LAB/LAB-eh.js";
      head.insertBefore(scriptElem, head.firstChild);
    }, 0);

    // required: shim for FF <= 3.5 not having document.readyState
    if (doc.readyState == null && doc.addEventListener) {
      doc.readyState = "loading";
      doc.addEventListener("DOMContentLoaded", handler = function() {
        doc.removeEventListener("DOMContentLoaded", handler, false);
        doc.readyState = "complete";
      }, false);
    }

  };

  vegas.loadScript = function (script, callback) {

    if (!labOptionsSet) {
      setLabOptions();
    }

    $LAB.script(script).wait(function () {
      callback.call(this);
    });

  };

  vegas.loadScripts = function (scripts, callback) {


    var completed = 0;
    scripts.forEach(function (script) {
      vegas.loadScript(script, function () {
        completed++;
        if (completed === scripts.length) {
          callback.call(this);
        }
      });
    });

  };

  vegas.fetchSettings = function (callback) {

    var settingsFiles = [
      'settings/default.settings.js',
      'settings/settings.js'
    ];

    vegas.loadScripts(settingsFiles, function () {
      callback.call(this, vegas.settings);
    });

  };

  vegas.getScripts = function () {
    return ['settings/settings.js'];
  };

  init();

})(this)

