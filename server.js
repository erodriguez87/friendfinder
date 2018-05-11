// NPM Packages - dependencies that this application needs
  // ==============================================================================
  var express = require("express");
  var bodyParser = require("body-parser");
  var path = require("path");

// EXPRESS setup and initializing a default port
  // ==============================================================================
  // Create the express server
  var app = express();
  var PORT = process.env.POR || 8080;

// BODY PARSER Sets up the Express app to handle data parsing
  // ==============================================================================
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());


// ROUTING - pointing our server to the routes
  // ==============================================================================
  require("./routes/apiRoutes")(app);
  require("./routes/htmlRoutes")(app);

// LISTEN - start the server, let the console know the server is running
  // =============================================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
