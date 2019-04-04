let  myMap = L.map('map3').setView([32.18, -99.14], 4)
let OpenStreetMap_BlackAndWhite = 'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
L.tileLayer(OpenStreetMap_BlackAndWhite, {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap)

let farmData = 'https://github.com/felippehsk/felippehsk.github.io/tree/master/map3/Data_3.geojson'
jQuery.getJSON(farmData, function(data){
	L.geoJSON(data).addTo(myMap)
})
