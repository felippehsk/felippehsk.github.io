function init () {
  // Begin map 1
  let map1 = L.map('map1').setView([32.18, -99.14], 4)
  L.tileLayer('https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=9e58ec91b076457dbf9835a1932e032c', {
    attribution: 'Thunderforest'
  }).addTo(map1)
  let city = L.marker([30, -90]).addTo(map1)
  let area = L.polygon([
    [31, -88],
    [35, -88],
    [32, -82]
  ]).addTo(map1)
  area.bindPopup('A polygon')
  city.bindPopup('A marker')
  
  // Begin map 2
  let map2 = L.map('map2').setView([37, -95], 4)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map2)
  L.tileLayer.wms('http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi', {
    layers: 'nexrad-n0r-900913',
    format: 'image/png',
    transparent: true,
    attribution: 'NOAA, Iowa State University'
  }).addTo(map2)
  L.tileLayer.wms('https://mesonet.agron.iastate.edu/cgi-bin/wms/us/wwa.cgi', {
    layers: 'warnings_c',
    format: 'image/png',
    transparent: true,
    attribution: 'NOAA, Iowa State University'
  }).addTo(map2)
}
window.addEventListener('load', init)
