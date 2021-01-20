sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "jquery.sap.global",
    "sap/ui/core/routing/History"
  ], function(Controller, jquery, History) {
    "use strict";
  
    return Controller.extend("com.myorg.myUI5App.controller.MV_Detail", {
      onInit: function() {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.getRoute("MV_Detail").attachMatched(this._onRouteMatched, this);
        
        
      // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// oRouter.getRoute("MV_Detail").attachPatternMatched(this._onObjectMatched, this)
      },
      _onRouteMatched: function (oEvent) {
        debugger;
        var oArgs, oView;
        oArgs = oEvent.getParameter("arguments");
        oView = this.getView();
        console.log(oArgs);

        this.getOwnerComponent().getModel().getProperty("/movieName", oArgs.movieName);
        this.getView().byId("img").setSrc("{/movieName/imgUrl}");
        console.log(this.getView().byId("img").getSrc());

      },
      onBackPress: function() {
        var oHistory = History.getInstance();
        var sPreviousHash = oHistory.getPreviousHash();

        if (sPreviousHash !== undefined) {
            window.history.go(-1);
        } else {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Form1View", true);
        }
      }

    });
  });
  0