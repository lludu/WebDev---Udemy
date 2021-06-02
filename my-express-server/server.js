//jshint esversion:6

//add express and require it
const express = require('express')

//create a function to bind the express module, name it app
const app = express();

//define the port for the app
const port = 3000

//define what happens when a browser talks to server and makes a get request
// app.get("/", function(request, response){
//   //send a message to the browser
//   response.send("Hello")
// });

// define the get method using es6 write-up
// req = request, res = response
// "/" is the root of the page, i.e. the homepage
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>")
})

//this is when a user tries to pull the contact page
app.get("/contact", (req, res) => {
  res.send("Contact me at: andrew@andrewjash.com")
})

//this is when a user tries to pull the about page
app.get("/about", (req, res) => {
  res.send("The owner of this site is Andrew Ash<br/>He is 34 years old.")
})

//this is when a user tries to pull the about page
app.get("/hobbies", (req, res) => {
  res.send("I like coding boo")
})



//listen on a specific port for http requests to the server
//add a callback function to say server started
// app.listen(port, function(){
//   console.log("Server has started on port 3000")
// });

//listen and port callback can also be done like this, using es6 $ and backticks `
app.listen(port, () =>{
  console.log(`Server has started on http://localhost:${port}`)
})
