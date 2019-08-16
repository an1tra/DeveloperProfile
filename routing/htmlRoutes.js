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
      app.get("/education", function(err, res) {
       
        if (err) {
          console.log(err);
        } else {
          res.render("education");
        }
    
      });
      app.get("/skills", function(err, res) {
       
        if (err) {
          console.log(err);
        } else {
          res.render("skills");
        }
    
      });

    };