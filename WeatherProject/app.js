// Open weather map api id: e832ff069e42ebaadbff6d659eeed841


const express = require("express");
const https = require("https");
const bodyParser = require("body-parser")
const port = 3000;

const app = express();
//need this to parse through post request
app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static(__dirname + 'public'))
app.use('public', express.static('public'))

//Get the url page file
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
})


//Upon submitting the form
app.post("/", (req,res)=>{
  // res.send('Testing')

  console.log(req.body.zipCode);

  //create the zipcode query
  // const query = req.body.zipCode;
  const query = req.body.zipCode;
  const apiKey = "e832ff069e42ebaadbff6d659eeed841";
  const units = "imperial";
  const url = "https://api.openweathermap.org/data/2.5/weather?appid="+apiKey+"&units="+units+"&zip="+query+"";

  //use the nodejs native module http to get the data from the api key
  https.get(url, (response) => {
    console.log(response.statusCode,'Status:',response.statusMessage)

    //when recieved data
    response.on("data", (data)=>{
      const weatherData = JSON.parse(data)
      console.log(weatherData)

      const temp = weatherData.main.temp
      const feelsLike = weatherData.main.feels_like
      const weatherDesc = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon
      const iconURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"






      //use res.write to send more than one piece of data when you call res.send
      res.write('<div class="jumbotron jumbotron-fluid">');
        res.write('<div class="container">');
          res.write('<h1 class="city">'+query+'</h1>');

          res.write('<div class="card">');
            res.write('<div class="card-body ml-auto mr-auto">');
              res.write('<span class="currentTemp">The current temperature is: '+temp+'</span>');
            res.write('</div>');
          res.write('</div>');

          res.write('<div class="card">');
            res.write('<div class="card-body ml-auto mr-auto">');
              res.write('<span class="feelsLike">It currently feels like '+feelsLike+' outside.</span>');
            res.write('</div>');
          res.write('</div>');

          res.write('<div class="card">');
            res.write('<div class="card-body ml-auto mr-auto">');
              res.write('<span class="iconImg"><img src='+iconURL+'>"</span>');
            res.write('</div>');
          res.write('</div>');
        res.write('</div>');
      res.write('</div>');
      res.send()
    })
  })
  // res.send('Testing')



})








app.listen(3000, ()=> {
  console.log(`Server is running on http://localhost:${port}`);
})
