module.exports = function(app) {
    //
      app.get("/", function(req, res) {
       
        if (err) {
          console.log(err);
        } else {
          res.render("index");
        }
    
      });
      app.get("/portfolio", function(err, res) {
       
        if (err) {
          console.log(err);
        } else {
          res.render("portfolio");
        }
    
      });

    };