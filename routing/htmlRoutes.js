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
      app.get("/contact", function(err, res) {
       
        if (err) {
          console.log(err);
        } else {
          res.render("contact");
        }
    
      });
      // app.post("/contact", function(req, res) {
      //   let name = req.body.name;
      //   let email = req.body.email;
      //   let subject = req.body.subject;
      //   let message = req.body.message;

      //   console.log(name, email, subject, message);


      // });

    };