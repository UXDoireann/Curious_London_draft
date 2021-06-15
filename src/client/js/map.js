import fetch from "node-fetch"

//HandleSubmit Function
function handleMap(event){
    event.preventDefault()

let mapImage = document.getElementById('map');


fetch('http://localhost:7070/addMap', {
    method: 'POST',
        credentials: 'same-origin',
       mode: 'cors',
        headers:{
            'Content-Type':'application/json',
        },
       // body:JSON.stringify({formText: formText})
})
.then(res => res.json())
.then(function(mapFetch) {

    let mymap = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer(mapFetch, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);


        console.log(mapFetch); 
})}

export {handleMap}