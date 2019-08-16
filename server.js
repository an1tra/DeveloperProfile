// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Setting up port
var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Creating express app and configuring middleware 
//needed to read through our public folder
app.use(bodyParser.urlencoded({ extended: false })); //For body parser
app.use(bodyParser.json());
app.use(express.static("public"));

// Routes
require("./routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });


  module.exports = app;




