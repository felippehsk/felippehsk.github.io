let  myMap = L.map('map3').setView([32.18, -99.14], 4)
let Esri_WorldImagery = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(Esri_WorldImagery, {
		attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
	}).addTo(myMap)

let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON (stateDemographicsUrl, function(data){
// Will apply a diferent style for each feature - polygon
	let stateStyle = function (feature) {
	  let age = feature.properties.MED_AGE // get the current state's Median Age attribute
	  let stateColor = 'olive' // let the initial color be a darker green
	  if ( age < 38 ) { stateColor = 'green' } // if the state's median age is less than the average, color it a lighter green
	  return {
	    color: stateColor, //use the color variable above for the value
	    weight: 1,
	    fillOpacity: 0.5
	  }
	}
	let onEachFeature = function (feature, layer) {
		let name = feature.properties.STATE_NAME
		let age = feature.properties.MED_AGE
		layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
	}
	let geojsonOptions = {
		style: stateStyle,
		onEachFeature: onEachFeature
	}
	L.geoJSON (data, geojsonOptions).addTo(myMap)
})
