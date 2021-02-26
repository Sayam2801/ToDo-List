//jshint esversion:6
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workListItems = [];
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", 'ejs');
app.use(express.static('public'));

app.get("/", function(req, res) {
  const day = date.getDate();
  res.render("list", {listTitle: day, newListItems: items});
});
app.post("/",function(req,res) {
  if(req.body.list === "Work"){
    workListItems.push(req.body.newItem);
    res.redirect("/work");
  }
  else {
    items.push(req.body.newItem);
    res.redirect("/");
  }
});
app.get("/work", function(req,res) {
  res.render("list", {listTitle: "Work List", newListItems: workListItems});
});
app.get("/about", function(req,res) {
  res.render("about");
});
app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
