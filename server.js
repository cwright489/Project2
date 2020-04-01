// Requiring necessary npm middleware packages 
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("./config/passport");
var hbs = require("hbs");
// Setting up port
var PORT = process.env.PORT || 8080;
//Import the models folder
var db = require("./models");
// Creating express app and configuring middleware 
//needed to read through our public folder
//we are doing a GET to test if our server is working fine
var app = express();
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
//
// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.get("/", (req, res) => {
  // let zodiacList = getRandomList();
  res.render("templates");
});
app.get("/horoscope", (req, res) => {
  // let zodiacList = getRandomList();
  res.render("horoscopeTemplate", {
    pageTitle: "homepage",
    welcomeMessage: "hello",

  });
});
//
//this will listen to and show all activities on our terminal to 
//let us know what is happening in our app
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});