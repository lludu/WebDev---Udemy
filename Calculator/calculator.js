//set port
const port = 3000;
//require express
const express = require("express");
//require body parser
const bodyParser = require("body-parser");

//set express function
const app = express();

//grab the info from the url form
app.use(bodyParser.urlencoded({extended: true}));


// ------------- ADDITION CALCULATOR ------------
//setup the responds from the root
app.get("/", (req, res) => {
  //Send a single string like Hello World
  // res.send('Hello World')

  //send the webpage file
  //__dirname = the file path of where you currently are
  //concatenate that with the file name
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {

  //tap into the form value
  // console.log(req.body.num1);

  //Number changes the string to a integer
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = num1 + num2

  res.send("The result of the calculation is " + result)
})


// ---------------- BMI CALCULATOR ----------

app.get("/bmiCalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html")
});
app.post("/bmiCalculator", (req, res) => {
  // BMI = kg / m^2 (weight / height, squared)
  // parseFloat changes string into floating number, instead of just number
  height = parseFloat(req.body.height);
  console.log(height)
  weight = parseFloat(req.body.weight);
  console.log(weight)
  bmi = Math.round((weight / (height*height)));
  console.log(bmi)

  res.send("<h1>BMI Calculator</h1>" + "Your BMI is " + bmi)
})











app.listen(port, () => {
  console.log(`Server has started on http://localhost:${port}`)
})
