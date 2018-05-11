// Variables and dependencies
  const path = require("path");

// Routes
  module.exports = function(app) {

    //survey route
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../app/public/survey.html"));
    });

    // Default route leads to the home page
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../app/public/home.html"));
    });
  };
