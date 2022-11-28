require([
  "esri/config",
  "esri/Map", 
  "esri/views/MapView"
  ], funtion (esriConfig, Map, MapView) {
        //Setting the API Key 
        esriConfig.apiKey = "AAPK78146bcb95be4b62ab610fa11305a227m2MYYbA3ylOfcGRmNFxDIq0EPukzUxpkF0xN3k3x54GHVtlvRRHNKpdCmAF9iqJs";
        
        const map = new Map({ 
        basemap: "arcgis-dark-gray" 
        });
        
        const view = new MapView({
          container: "viewDiv", 
          map: map, 
          extent: [32.7767, 96.7970], 
          zoom: 12
        });
});
          
