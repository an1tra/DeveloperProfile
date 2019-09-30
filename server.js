// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

// Setting up port
const PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();

// Creating express app and configuring middleware 
//needed to read through our public folder
app.use(bodyParser.urlencoded({ extended: true })); //For body parser
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






