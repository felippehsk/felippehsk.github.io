let  myMap = L.map('map').setView([32.18, -99.14], 4)
let OpenStreetMap_BlackAndWhite = L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}). addTo(myMap);
let point = L.marker([30, -90]).addTo(myMap)
let pol = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(myMap);
let latlngs = [
    [45.51, -122.68],
    [37.77, -122.43],
    [34.04, -118.2]
];
let polyline = L.polyline(latlngs, {color: 'red'}).addTo(myMap);

pol.bindPopup('A polygon')
point.bindPopup('A <em>marker</em>')
polyline.bindPopup('A line')
