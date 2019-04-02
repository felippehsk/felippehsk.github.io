let  myMap = L.map('yield').setView([-22.83225, -49.11067], 16)
let Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(myMap)

L.esri.featureLayer({
  url: 'https://services9.arcgis.com/SDQDNhpG8jikA0D1/arcgis/rest/services/Orange_Field_Prediction/FeatureServer/0'
}).addTo(myMap)

L.esri.featureLayer({
  url: 'https://services9.arcgis.com/SDQDNhpG8jikA0D1/arcgis/rest/services/Orange_Field/FeatureServer/0'
}).addTo(myMap)
