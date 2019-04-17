function init () {
  let demoMap = L.map('map').setView([32.18, -99.14], 4)
  let Esri_WorldImagery = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
  L.tileLayer(Esri_WorldImagery, {
  		attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  	}).addTo(demoMap)

  let ssurgo = 'C:/MSc_Felippe/HTML_CSS_Javascript_codes/WebGIS/Final_Project/Project_Development/data/SSURGO_LA.geojson'
  jQuery.getJSON (ssurgo, function(data){
  	L.geoJSON (data).addTo(demoMap)
  })
}
window.addEventListener('load', init)
