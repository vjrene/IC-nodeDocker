var express = require('express');
var app = express();
var fs = require("fs");

app.get('/', function(req, res) {
  res.send('Welcome to Ulta Lite!\n Navigate to ultaData for all data. Search through our cosmetic collection by id.\n');
});
app.listen(8081);
console.log('Listening on port 8081...');

//get all data
app.get('/ultaData', function (req, res) {
   fs.readFile( __dirname + "/" + "ultalite.json", 'utf8', function (err, data) {
       res.end( data );
   });
})

app.get('/ultaData/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "ultalite.json", 'utf8', function (err, data) {
       ultalite = JSON.parse( data );
       var ulta = ultalite["cos" + req.params.id] 
       console.log( ulta );
       res.end( JSON.stringify(ulta));
   });
})
