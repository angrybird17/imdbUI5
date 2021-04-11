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
], function (Controller, JSONModel, Fragment, Filter, FilterOperator, syncStyleClass, MessageToast, Dialog, DialogType, Button, ButtonType, Text) {
  "use strict";

  return Controller.extend("com.myorg.myUI5App.controller.Table", {
    onInit: function () {
      var oModel = new JSONModel(jQuery.sap.getModulePath("com.myorg.myUI5App.model", "/data.json"));
      this.getView().setModel(oModel);
    },
    onBackPress: function () {
      window.history.go(-1);
    },
    onPaste: function (oEvent) {
      var aData = oEvent.getParameter("data");
      MessageToast.show("Pasted Data: " + aData);
    },
    onEditPress: function (oEvent) {
      debugger;
      var oButton = oEvent.getSource(),
        oView = this.getView();

      if (!this._pDialog) {
        this._pDialog = Fragment.load({
          id: oView.getId(),
          name: "com.myorg.myUI5App.fragment.table",
          controller: this
        }).then(function (oDialog) {
          oDialog.setModel(oView.getModel());
          return oDialog;
        });
      }

      this._pDialog.then(function (oDialog) {
        // this._configDialog(oButton, oDialog);
        oDialog.open();
      }.bind(this));

      var getJobID = this.getView().byId('table').getSelectedItem();
      var getJobValue = getJobID.mAggregations.cells[0].mProperties.text;
      this.getView().byId('jobId').setText(getJobValue);



      // if (!this.oDefaultMessageDialog) {
      //   this.oDefaultMessageDialog = new Dialog({
      //     type: DialogType.Message,
      //     title: "IMDB Application",
      //     content: new Text({ text: "A Demo IMDB App built using UI5 for learning purpose." }),
      //     beginButton: new Button({
      //       type: ButtonType.Emphasized,
      //       text: "OK",
      //       press: function () {
      //         this.oDefaultMessageDialog.close();
      //       }.bind(this)
      //     })
      //   });
      // }

      // this.oDefaultMessageDialog.open();
    },
    onDialogClose: function (oEvent) {
      // var oSelectedItem = oEvent.getParameter("selectedItem");
      // oEvent.getSource().getBinding("items").filter([]);

      // if (!oSelectedItem) {
      //   return;
      // }
      this.byId('tableDialog').close();


      // this.byId("insInput").setValue(oSelectedItem.getTitle());
    },
    onSave: function (oEvent) {
      debugger;
      var listData = this.getView().byId('list').getItems();
      console.log(listData);
      var listItem = {
        FileName: '',
        DocumentType: '',
        CreatedOn: '',
        Status: '',
        FinishedOn: '',
        ClientId: '',
        Sender: '',
        Flag: ''
      }

      listData.map((item, index) => {
        console.log(index);
        listItem[item.mAggregations.content[0].mProperties.placeholder] = item.mAggregations.content[0].mProperties.value
      });
      console.log(listItem);

      var tableData = this.getView().byId('table').getColumns();
      this.getView().byId('table').getColumns()[1].mAggregations.header.mProperties.text
      listItem.map((item, index) => {
        console.log(index);
        tableData[index].mAggregations.header.mProperties.text = item
      });
    }

  });
});
