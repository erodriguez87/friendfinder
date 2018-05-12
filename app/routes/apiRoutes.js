// Variables and dependencies
var friendData = require("../data/friends");

// Routes for the server to return data
  module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
      res.json(friendData);
      console.log(friendData);
    });

    app.post("/api/friends", function(req, res) {
      friendData.push(req.body); 
      let totalDiff = [];
      let liveMath = 0;

      for (i=0; i<friendData.length; i++){
        liveMath=0;
          for (j=0; j<9; j++){
            liveMath += Math.abs(parseInt(req.body.scores[j]) - parseInt(friendData[i].scores[j]));
            // console.log(liveMath);
          };
          totalDiff.push(liveMath);
      };
      console.log('this is the total difference array ' + totalDiff);

      var index = 0;
      var value = totalDiff[0];
      for (var l = 1; i<totalDiff.length; l++){
        if(totalDiff[i] < value){
          value = totalDiff[i];
          index = i;
        }
      }

      console.log('you are most similar to ' + friendData[index].name + ' with a total difference of ' + totalDiff[index])

      res.json(true);
    });

    app.post("/api/clear", function() {
      // Empty out the arrays of data
      friendData = [];
      console.log(friendData);
    });
  };
