//jshint esversion:6
var items = ["Buy Food", "Cook Food", "Eat Food"];
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
app.get("/", function(req,res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";
  // if(currentDay === 0 || currentDay === 6)
  // {
  //   // res.sendFile(__dirname + "/weekend.html");
  //   day="Weekend";
  // }
  // else {
  //   // res.sendFile(__dirname + "/weekday.html");
  //   day="Weekday";
  // }
   // switch(currentDay)
   // {
   //   case 0:
   //          day="Sunday";
   //          break;
   //   case 1:
   //          day="Monday";
   //          break;
   //   case 2:
   //          day="Tuesday";
   //          break;
   //   case 3:
   //          day="Wednesday";
   //          break;
   //   case 4:
   //          day="Thursday";
   //          break;
   //   case 5:
   //          day="Friday";
   //          break;
   //   case 6:
   //          day="Saturday";
   //          break;
   //   default:
   //          console.log("Error! Current day is " + currentDay);
   // }
   var options = {
     weekday: "long",
     day: "numeric",
     month: "long"
   };
   var day = today.toLocaleDateString("en-US", options);
   res.render("list", {
     kindOfDay:day,
     newListItems:items
   });
});
app.post("/", function(req,res) {
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});
app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
