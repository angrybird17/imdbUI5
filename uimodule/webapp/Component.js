sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/Device",
  "com/myorg/myUI5App/model/models",
  "jquery.sap.global"
], function (UIComponent, Device, models, jQuery) {
  "use strict";

  return UIComponent.extend("com.myorg.myUI5App.Component", {

    metadata: {
      manifest: "json"
    },

    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * @public
     * @override
     */
    init: function () {
      // call the base component's init function
      UIComponent.prototype.init.apply(this, arguments);

      // enable routing
      this.getRouter().initialize();

      // set the device model
      this.setModel(models.createDeviceModel(), "device");

      //back window.history.go(-1);
      // window.onbeforeunload = function (e) {
      //   // var dialogText = 'Dialog text here';
      //   // e.returnValue = dialogText;
      //   this.console.log('e ', e);
      //   return "dialogText";
      // };
      // function back() { window.history.forward(); }
      // setTimeout("back()", 0)
      // window.onunload = function () { null };



      // jQuery(document).ready(function($) {

      //   if (window.history && window.history.pushState) {

      //     window.history.pushState('backward', null, './#backward');

      //     $(window).on('popstate', function() {
      //       alert('Back button was pressed.');
      //     });

      //   }
      // });

      // window.onpopstate = function (e) {
      //   if (window.history.go(-1)) {
      //     this.alert('hi');
      //   }
      //   // this.alert('hi');
      // }

      // window.hashchange = function () {
      //   // if (history.length - 1) {
      //     this.alert('hi');
      //   // }

      // }
    }
    // onWindowUnload: function (oEvent) {
    //   debugger;
    //   jQuery(window).unload(function () { alert("Bye now!"); });
    //   return "hi";
    // },

  });
});
