// Variables and dependencies
var friendData = require("../data/friends");

// Routes for the server to return data
  module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
      res.json(friendData);
      console.log(friendData);
    });

    app.post("/api/friends", function(req, res) {
      // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
      // It will do this by sending out the value "true" have a table
      // req.body is available since we're using the body-parser middleware
      friendData.push(req.body);
        res.json(true);
    });

    app.post("/api/clear", function() {
      // Empty out the arrays of data
      friendData = [];
      console.log(friendData);
    });
  };
