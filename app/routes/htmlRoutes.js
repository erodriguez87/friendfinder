// Variables and dependencies
  const path = require("path");

// Routes for the user to get to different html pagesc
  module.exports = function(app) {

    //survey route
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // Default route leads to the home page
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  };
