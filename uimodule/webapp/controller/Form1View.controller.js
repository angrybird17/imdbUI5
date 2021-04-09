sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/syncStyleClass",
    "sap/m/MessageToast",
    "sap/m/Dialog",
    "sap/m/DialogType",
    "sap/m/Button",
    "sap/m/ButtonType",
    "sap/m/Text"
  ], function(Controller, JSONModel, Fragment, Filter, FilterOperator, syncStyleClass, MessageToast, Dialog, DialogType, Button, ButtonType, Text) {
    "use strict";
  
    return Controller.extend("com.myorg.myUI5App.controller.Form1View", {
      onInit: function() {
        var oModel = new JSONModel(jQuery.sap.getModulePath("com.myorg.myUI5App.model", "/data.json"));
			  this.getView().setModel(oModel);
      },
      
      _onSelectionChange: function (oEvent) {
        debugger;
        var selKey = oEvent.getParameter("selectedItem").getKey();
  
        var oModel = this.getOwnerComponent().getModel();
        // var oModel = new JSONModel(jQuery.sap.getModulePath("com.myorg.myUI5App.model", "/data.json"));
  
        // reset searchParam on every trigger
        // oModel.setProperty("/movie/Inspiring", null);
  
        if (selKey === "Inspiring") {
          oModel.setProperty("/visible/Inspiring", true);
          oModel.setProperty("/visible/Comedy", false);
          oModel.setProperty("/visible/Horror", false);
          // this.getView().byId("tableVesselDetails").setVisible(false);
        } else if (selKey === "Comedy") {
          oModel.setProperty("/visible/Inspiring", false);
          oModel.setProperty("/visible/Comedy", true);
          oModel.setProperty("/visible/Horror", false);
          // this.getView().byId("tableVesselDetails").setVisible(false);
        } else if (selKey === "Horror") {
          oModel.setProperty("/visible/Inspiring", false);
          oModel.setProperty("/visible/Comedy", false);
          oModel.setProperty("/visible/Horror", true);
          // this.getView().byId("tableVesselDetails").setVisible(false);
        }
        this.getView().setModel(oModel);
      },
      onGoPress: function (oEvent) {
        debugger;
        var oModel = this.getOwnerComponent().getModel();
        if (oModel.getProperty("/visible/Inspiring") === true) {
          var selectedM = this.getView().byId("iSelect").getSelectedKey();
        } else if (oModel.getProperty("/visible/Comedy") === true) {
          var selectedM = this.getView().byId("cSelect").getSelectedKey();
        } else if (oModel.getProperty("/visible/Horror") === true) {
          var selectedM = this.getView().byId("hSelect").getSelectedKey();
        }
        // var oHeader = this.getOwnerComponent().getModel().getProperty("/movieName");
          var route = sap.ui.core.UIComponent.getRouterFor(this);
          // var sMovie = oEvent.getSource().getText();

          if (selectedM === "") {
            this.oDefaultMessageDialog = new Dialog({
              type: DialogType.Message,
              title: "Warning",
              icon: "sap-icon://message-warning",
              content: new Text({ text: "Please select a movie to proceed" }),
              beginButton: new Button({
                type: ButtonType.Emphasized,
                text: "OK",
                press: function () {
                  this.oDefaultMessageDialog.close();
                }.bind(this)
              })
            });

          this.oDefaultMessageDialog.open();

          } else {
            sap.ui.core.BusyIndicator.show();
        setTimeout(function () {
          sap.ui.core.BusyIndicator.hide();
        }, 2000);
          }
    

          route.navTo("MV_Detail", {
            movieName: selectedM
          });
      },
      onInfoPress: function () {
        if (!this.oDefaultMessageDialog) {
          this.oDefaultMessageDialog = new Dialog({
            type: DialogType.Message,
            title: "IMDB Application",
            content: new Text({ text: "A Demo IMDB App built using UI5 for learning purpose." }),
            beginButton: new Button({
              type: ButtonType.Emphasized,
              text: "OK",
              press: function () {
                this.oDefaultMessageDialog.close();
              }.bind(this)
            })
          });
        }
  
        this.oDefaultMessageDialog.open();
      },
      onBackPress: function() {
        window.history.go(-1);       
      }

    });
  });
  