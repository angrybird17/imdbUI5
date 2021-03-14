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
          "LN": {
              "movieName": "Lagaan",
              "imgUrl": "https://m.media-amazon.com/images/M/MV5BODA5OGJiZDUtZjcwYi00YjA2LWIwYTYtMzFlNTc1NWYyMmVkXkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg",
              "videoUrl": "https://www.youtube.com/embed/rZPbpymefuE",
              "cast": [
                  {
                      "actor": "Aamir Khan	 as	  Bhuvanr"
                  },
                  {
                      "actor": "Gracy Singh	 as	 Gauri"
                  },
                  {
                      "actor": "Rachel Shelley	 as	 Elizabeth Russell"
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
                      "actor": "Anushka Shetty	 as   Bhaagamathie / Chanchala"
                  },
                  {
                      "actor": "Asha Sharath	 as  	Vyshnavi Natarajan"
                  }
              ]
          },
          "MA": {
              "movieName": "Mahanati",
              "imgUrl": "https://images.indianexpress.com/2018/05/savitri-759.jpg",
              "cast": [
                  {
                      "actor": "Keerthy Suresh	as 	Savitri Garu"
                  },
                  {
                      "actor": "Dulquer Salmaan	 as 	Gemini Ganesan"
                  }
              ]
          },
          "SP": {
              "movieName": "Soorarai Pottru",
              "imgUrl": "https://varnam.my/wp-content/uploads/2020/08/org_57199202002041228-1.jpg",
              "cast": [
                  {
                      "actor": "Suriya	as 	Nedumaaran Rajangam"
                  },
                  {
                      "actor": "Aparna Balamurali	 as 	Sundari"
                  }
              ]
          },
          "TC": {
              "movieName": "The Conjuring",
              "imgUrl": "https://wallpapercave.com/wp/wp1851118.jpg",
              "cast": [
                  {
                      "actor": "Vera Farmiga	as	Lorraine Warren"
                  },
                  {
                      "actor": "Patrick Wilson	as	Ed Warren"
                  },
                  {
                      "actor": "Lili Taylor	 as 	Carolyn Perron"
                  }
              ]
          },
          "P": {
              "movieName": "Pari",
              "imgUrl": "https://i.pinimg.com/originals/09/0d/02/090d026a141cc980414463c4a7ea1b2c.jpg",
              "cast": [
                  {
                      "actor": "Anushka Sharma	 as 	Rukhsana"
                  },
                  {
                      "actor": "Parambrata Chattopadhyay	 as 	Arnab"
                  }
              ]
          }
        };
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.getRoute("MV_Detail").attachMatched(this._onRouteMatched, this);        
        
      },
      _onRouteMatched: function (oEvent) {
          debugger;
          // console.log(oEvent.getParameters());
          var oArgs = oEvent.getParameter("arguments");
          console.log(oArgs);

          this.getView().bindElement({
            path : "/" + oArgs.movieName
          });

          for (var key in oData) {
            if (oData.hasOwnProperty(key)) {
              if (oArgs.movieName === key) {
                var oModel = new JSONModel(oData[key]);

                this.getView().setModel(oModel);
                // var oImg = this.getView().byId("img");
                // var oFrame = this.getView().byId("video");
                // var oFrameContent = oFrame.$()[0];
                // console.log('oImg ', oImg);
                // oFrame.setAttribute('src', oData[key].videoUrl, true);

                var divId = this.createId("video"); // this == controller instance
                console.log('divId ' + divId);
                document.getElementById(divId).setAttribute('src', oData[key].videoUrl, true);
              }
            }
          }

          console.log(oEvent.getParameter("config").pattern);
      },
      
      _onBindingChange : function (oEvent) {
        if (!this.getView().getBindingContext()) {
          this.getRouter().getTargets().display("notFound");
        }
      },
      onBackPress: function() {
            window.history.go(-1);       
      }

    });
  });
  