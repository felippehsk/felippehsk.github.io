function init () {
  let demoMap = L.map('map').setView([30.3645, -91.1722], 14)
  let Esri_WorldImagery = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
  L.tileLayer(Esri_WorldImagery, {
  		attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  	}).addTo(demoMap)

  let ssurgo = 'https://felippehsk.github.io/Final_Project/Project_Development/data/SSURGO_Farm.geojson'
  jQuery.getJSON (ssurgo, function(data){
  	L.geoJSON (data).addTo(demoMap)
  })
}
window.addEventListener('load', init)
