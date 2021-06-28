var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/fruitsDB";

// Create a database
MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

// Create a collection
MongoClient.connect(url, { useUnifiedTopology: true } , function(err, db) {
  if (err) throw err;
  var dbo = db.db("fruitsDB");
  dbo.createCollection("fruits", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

// Insert an object
MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("fruitsDB");
    var myobj = { name: "Apple", score: 8, review: "Great fruit" };
    dbo.collection("fruits").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });

// Find an object
MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("fruitsDB");
    dbo.collection("fruits").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.name);
      db.close();
    });
  });
