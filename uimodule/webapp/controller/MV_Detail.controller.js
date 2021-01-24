sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "jquery.sap.global",
    "sap/ui/core/routing/History",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel"
  ], function(Controller, jquery, History, Filter, FilterOperator, JSONModel) {
    "use strict";
    
    //Global Definitions
    var oData = {};
    return Controller.extend("com.myorg.myUI5App.controller.MV_Detail", {
      onInit: function() {
        oData = {
          "POH": {
              "movieName": "The Pirsuit of Happiness",
              "imgUrl": "https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/sphe-pursuit_of_happyness_2006-Full-Image_GalleryCover-en-US-1484001256987._UY500_UX667_RI_VLlDKyg2xplhPOpi73ReetPsQLmrUs3aG_TTW_.jpg",
              "videoUrl": "https://www.youtube.com/embed/DMOBlEcRuw8",
              "cast": [
                  {
                      "actor": "Will Smith  as  Chris Gardner"
                  },
                  {
                      "actor": "Jaden Smith  as  Christopher"
                  }
              ]
          },
          "PJ": {
              "movieName": "Pilla Zamindar",
              "imgUrl": "resources/img/pj.png",
              "cast": [
                  {
                      "actor": "Nani  as  Praveen Jayaramaraju"
                  },
                  {
                      "actor": "Srinivas Avasarala  as  Kanna Babu"
                  }
              ]
          },
          "BH": {
              "movieName": "Bhagamathie",
              "imgUrl": "https://www.25cineframes.com/images/uploads/2018/01/Anushka-Shetty-Bhagmati-Movie-First-Look-ULTRA-HD-Posters-WallPapers.jpg",
              "cast": [
                  {
                      "actor": "Anushka Shetty	as  Bhaagamathie / Chanchala"
                  },
                  {
                      "actor": "Asha Sharath	as 	Vyshnavi Natarajan"
                  }
              ]
          }
        };
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.getRoute("MV_Detail").attachMatched(this._onRouteMatched, this);
        
        
      // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// oRouter.getRoute("MV_Detail").attachPatternMatched(this._onObjectMatched, this)
      },
      _onRouteMatched: function (oEvent) {
          debugger;
          // console.log(oEvent.getParameters());
          var oArgs = oEvent.getParameter("arguments");
          console.log(oArgs);

          this.getView().bindElement({
            path : "/" + oArgs.movieName
          });

          // var aFilter = [];
          // var oList = this.getView().byId("list");
          // var oBinding = oList.getBinding("items");

          // if (oArgs.movieName) {
          //   aFilter.push(new Filter("", FilterOperator.contains, oArgs.movieName));
          // }
          // oBinding.filter(aFilter);
          
          // var oData1 = oData.filter(oValue => {
          //   // TODO: Wildcard search vessel code or vessel name
          //   if (oValue.movieName.includes(oArgs.movieName)) {
          //     return true;
          //   }
          // });

          for (var key in oData) {
            if (oData.hasOwnProperty(key)) {
              // var val = obj[key];
              // console.log(key);
              if (oArgs.movieName === key) {
                var oModel = new JSONModel(oData[key]);

                this.getView().setModel(oModel);
                this.getView().byId("video").setAttribute(src, oData[key].videoUrl, true);
                // this.getView().byId("video").setSrc()
              }
            }
          }
          

          // set explored app's demo model on this sample
			 

          console.log(oEvent.getParameter("config").pattern);
      },
      
      _onBindingChange : function (oEvent) {
        // No data for the binding
        if (!this.getView().getBindingContext()) {
          this.getRouter().getTargets().display("notFound");
        }
      },
      onBackPress: function() {
            window.history.go(-1);       
      }

    });
  });
  