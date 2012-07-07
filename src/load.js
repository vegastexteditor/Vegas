(function(global, oDOC, handler) {
  var head = oDOC.head || oDOC.getElementsByTagName("head");

  function LABjsLoaded() {
    $LAB
    .setOptions({
      UseLocalXHR: false,
      CacheBust: true
    })
    .script('library/jquery/jquery-1.7.2.js')
    .script('library/underscore/underscore.js')
    .script('modules/base/utils.js')
    .script('modules/base/Base.js')
    .script('modules/base/Collection.js')
    .script('modules/base/ObjectCollection.js')
    .script('modules/view/View.js')
    .script('modules/view/ViewsCollection.js')
    .script('modules/view/views.js')
    .script('modules/region/RegionPair.js')
    .script('modules/region/Region.js')
    .script('modules/region/BaseRegion.js')
    .script('modules/region/RegionCollection.js')
    .script('modules/region/regions.js')
    .script('vegas.js')
    .wait(function () {
      if (vegas) {

        if (typeof(vegas.onready) == 'function') {
          vegas.onready();
        }

      }
      else {
        console.error("Could not load vegas.js");
      }
    });
  }

  // loading code borrowed directly from LABjs itself
  setTimeout(function() {
    if ("item" in head) { // check if ref is still a live node list
      if (!head[0]) { // append_to node not yet ready
        setTimeout(arguments.callee, 25);
        return;
      }
      head = head[0]; // reassign from live node list ref to pure node ref -- avoids nasty IE bug where changes to DOM invalidate live node lists
    }
    var scriptElem = oDOC.createElement("script"),
      scriptdone = false;
    scriptElem.onload = scriptElem.onreadystatechange = function() {
      if ((scriptElem.readyState && scriptElem.readyState !== "complete" && scriptElem.readyState !== "loaded") || scriptdone) {
        return false;
      }
      scriptElem.onload = scriptElem.onreadystatechange = null;
      scriptdone = true;
      LABjsLoaded();
    };
    scriptElem.src = "library/LAB/LAB.js";
    head.insertBefore(scriptElem, head.firstChild);
  }, 0);

  // required: shim for FF <= 3.5 not having document.readyState
  if (oDOC.readyState == null && oDOC.addEventListener) {
    oDOC.readyState = "loading";
    oDOC.addEventListener("DOMContentLoaded", handler = function() {
      oDOC.removeEventListener("DOMContentLoaded", handler, false);
      oDOC.readyState = "complete";
    }, false);
  }
})(window, document);
