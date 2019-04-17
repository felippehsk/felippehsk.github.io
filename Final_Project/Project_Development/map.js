function init () {
  let demoMap = L.map('map').setView([30.3645, -91.1722], 14)
  let Esri_WorldImagery = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
  L.tileLayer(Esri_WorldImagery, {
  		attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  	}).addTo(demoMap)

  let ssurgo = 'https://felippehsk.github.io/Final_Project/Project_Development/data/SSURGO_Farm.geojson'
  jQuery.getJSON (ssurgo, function(data){
    // Will apply a diferent style for each feature - polygon
    	let soilTypeStyle = function (feature) {
    	  let type = feature.properties.MUSYM
    	  let stateColor = 'olive' // let the initial color be a darker green
    	  if ( age < 38 ) { stateColor = 'green' } // if the state's median age is less than the average, color it a lighter green
    	  return {
    	    color: stateColor, //use the color variable above for the value
    	    weight: 1,
    	    fillOpacity: 0.5
    	  }
    	}
  	L.geoJSON (data).addTo(demoMap)
  })
}
window.addEventListener('load', init)
