//Express to run server
const express = require('express');

//Set-up instance of app
const app = express();

//Middleware
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

//Initialize main project folder
app.use(express.static('dist'));

// Setup Server
const port = 7070;

const server = app.listen(port, listening);

function listening(){
    console.log("server running");
    console.log(`running on localhost:${port}`);
};
//Other dependencies
var path = require('path');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();


//GET request
app.get('/', function (req, res) {
 res.sendFile('dist/index.html')
 })

 //Mapbox API Variables
let mapboxBaseUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=';
const mapKey = process.env.ACCESS_TOKEN;

console.log(`Your Mapbox key is ${process.env.ACCESS_TOKEN}`);

//

app.post("/addMap", async(req, res)=>{
    const getMap = await fetch(`${mapboxBaseUrl}``${mapKey}`,{
        method: 'POST'
    });
    try{
        const mapFetch = await getMap.json();
        console.log(mapFetch);
        res.send(mapFetch);
    }catch(error){
        console.log("error", error);
}

});