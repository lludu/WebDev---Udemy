
const express = require("express");
const port = 3000;
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js"); //require our custom date module/funciton

// console.log(date())

const items = [];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", (req, res) => {
const day = date.getDate();
  res.render('lists', {listTitle: day, newListItems: items});
});


//MAIN POST PAGE
app.post("/", (req, res) => {

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  }
  else {
    items.push(item); // appends item to the array
    res.redirect("/")  //reloads "redirects" the page again
  }

});



//WORK LIST POST PAGE
app.get("/work", (req, res)=>{
  res.render('lists', {listTitle: "Work List", newListItems: workItems });
});


//ABOUT POST PAGE
app.get("/about", (req, res)=>{
  res.render('about');
});



app.listen(port, ()=> {
  console.log(`Server is running on http://localhost:${port}`);
});
