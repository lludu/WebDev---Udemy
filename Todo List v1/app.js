
const express = require("express");
const port = 3000;
const bodyParser = require("body-parser");
const app = express();

var items = []

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", (req, res) => {
  // res.send("Hello");

var today = new Date();

var options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

var day = today.toLocaleDateString("en-US", options)


res.render('lists', {kindOfDay: day, newListItems: items});


});


app.post("/", (req, res) => {
  var item = req.body.newItem;
  items.push(item); // appends item to the array





  res.redirect("/")  //reloads "redirects" the page again


});

app.listen(port, ()=> {
  console.log(`Server is running on http://localhost:${port}`);
});
