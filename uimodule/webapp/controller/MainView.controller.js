sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";

  return Controller.extend("com.myorg.myUI5App.controller.MainView", {
    tilePress: function() {
      var route = sap.ui.core.UIComponent.getRouterFor(this);

      route.navTo("Form1_View");
    }
  });
});
