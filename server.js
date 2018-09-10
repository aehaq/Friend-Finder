// Node Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up Express
var app = express();
var PORT = process.env.PORT || 3000;

// Set up BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Set up connection to port
app.listen(PORT, function() {
    console.log("App listening on Port " + PORT);
});