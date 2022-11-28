require([
  "esri/config",
  "esri/Map", 
  "esri/views/MapView"
  ], funtion (esriConfig, Map, MapView) {
        //Setting the API Key 
        esriConfig.apiKey = "AAPK78146bcb95be4b62ab610fa11305a227m2MYYbA3ylOfcGRmNFxDIq0EPukzUxpkF0xN3k3x54GHVtlvRRHNKpdCmAF9iqJs";
        
        const map = new Map({ 
        basemap: "arcgis-topographic"
        });
        
      const view = new MapView({
        map: map,
        center: [-118.805, 34.027],
        zoom: 13, // scale: 72223.819286
        container: "viewDiv",
        constraints: {
          snapToZoom: false
        }
      });
});
          
