let mymap = L.map('map').setView([51.505, -0.09], 11);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZG9pcmVhbm4iLCJhIjoiY2twdjNmZzk5MWVydTJwcWs1NHN1bjRmMyJ9.IKNV6XzuGkiHNH8t6icpwA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);


//Sir John Soane Museum
const soane = L.circle([51.5179,- 0.1175], {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 1,
    radius: 250
}).addTo(mymap);

//Soane Pop-up
soane.bindPopup("Sir John Soane's Museum");

//Freud Museum
const freud = L.circle([51.55, -0.1775], {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 1,
    radius: 250
}).addTo(mymap);

//Freud Pop-up
freud.bindPopup("Freud Museum")

//Garden Museum
const garden = L.circle([51.494, -0.1202], {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 1,
    radius: 250
}).addTo(mymap);

//Garden Pop-up
garden.bindPopup("Garden Museum")
