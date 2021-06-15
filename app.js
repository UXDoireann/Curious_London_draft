let mymap = L.map('map').setView([51.505, -0.09], 10);


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

//Fulham Palace
const fulham = L.circle([51.4707, -0.2160], {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 1,
    radius: 250
}).addTo(mymap);

//Fulham Pop-up
fulham.bindPopup("Fulham Palace")

//William Morris
const morris = L.circle([51.5912, -0.0203], {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 1,
    radius: 250
}).addTo(mymap);

//William Morris Pop-up
morris.bindPopup("William Morris Gallery")

//Telegraph Hill Park
const telegraph = L.circle([51.4673, -0.0464], {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 1,
    radius: 250
}).addTo(mymap);

//Telegraph Hill Pop-up
telegraph.bindPopup("Telegraph Hill Park")
