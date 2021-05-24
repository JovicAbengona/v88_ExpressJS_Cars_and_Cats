var express = require("express");
var path = require("path");
var app = express();

app.get("/", function(request, response){
    response.sendFile(path.join(__dirname, "static", "index.html"));
});

app.use(express.static(path.join(__dirname, "static")));

app.use(function(request, response){
    response.sendFile(path.join(__dirname, "static", "404.html"));
});

app.listen(8080, function(){
    console.log("Listening on 8080");
});