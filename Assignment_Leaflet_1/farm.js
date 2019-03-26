let  myMap = L.map('farm').setView([40.13592, -89.14634], 14)
let  Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(myMap);

let point = L.marker([40.13592, -89.14634]).addTo(myMap)
let pol = L.polygon([
  [40.13616, -89.15539],
  [40.12863, -89.15524],
  [40.12909, -89.14585],
	[40.13491, -89.14598],
	[40.13494, -89.14686],
	[40.13623, -89.14689]
]).addTo(myMap);
let latlngs = [
    [40.14354, -89.14577],
    [40.11411, -89.14538]
];

let polyline = L.polyline(latlngs, {color: 'red'}).addTo(myMap);

pol.bindPopup('Field 1')
point.bindPopup('Felippe Farm Facility')
polyline.bindPopup('Farm Main Road')
