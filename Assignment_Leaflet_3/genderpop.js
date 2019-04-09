let  myMap = L.map('genderPop').setView([38, -99.14], 3.47)
let Esri_WorldImagery = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(Esri_WorldImagery, {
		attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
	}).addTo(myMap)

let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON (stateDemographicsUrl, function (data) {
// Will apply a diferent style for each feature - polygon
	let stateStyle = function (feature) {
	  let male = feature.properties.MALES // get the current state's white population
		let female = feature.properties.FEMALES // get the current state's black population
	  let stateColor = 'pink' // let the initial color be a darker green
	  if (male > female) { stateColor = 'blue' } // if the state's population is predominant white the state color is white
	  return {
	    color: stateColor, //use the color variable above for the value
	    weight: 1,
	    fillOpacity: 0.5
	  }
	}
	let onEachFeature = function (feature, layer) {
		let name = feature.properties.STATE_NAME
		let female = feature.properties.FEMALES
		let male = feature.properties.MALES
		let ratio = Number(Math.round(female/male +'e3')+'e-3')
		layer.bindPopup('<b>State: </b>' + name + '<br><b>Female population: </b>' + female + '<br><b>Male population: </b>' + male + '<br><b>Ratio Female/Male: </b>' + ratio)
	}
	let geojsonOptions = {
		style: stateStyle,
		onEachFeature: onEachFeature
	}

	L.geoJSON (data, geojsonOptions).addTo(myMap)
})
