const mongoose = require('mongoose');
// Mongoose Documentation: https://mongoosejs.com/docs/guide.html

// Connection URL  (create or connect to database)
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useUnifiedTopology: true, useNewUrlParser: true});




// ------------------------------------ CRUD with Mongoose in the database
// validation documentation: https://mongoosejs.com/docs/validation.html

// -----------------  [C]RUD ------- Create a Fruit
//create a new schema
const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please check the entry, no name specified!"]
  },
  // score: Number,  //Instead, use validation like below
  score: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

//create a mongoose model
const Fruit = mongoose.model("Fruit", fruitSchema);

//finally create the fruit document
const fruit = new Fruit({
  name: "Peach",
  score: 10,
  review: "Peaches are so yummy."
});

// fruit.save();




// ----------------- [C]RUD ------- Create a person
//create a person scheme
const personSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please check the entry, no name specified!"]
  },
  age: Number,
  favoriteFruit: fruitSchema
});

//create a person model
const Person = mongoose.model("Person", personSchema);

//create Jon as a person document
const person = new Person ({
  name: "Jon",
  age: 37,
});
// person.save();


// ----------------- [C]RUD ------- Create many Fruits and insert them
// https://mongoosejs.com/docs/api/model.html#model_Model.insertMany
// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 5,
//   review: "Kinda Weird."
// });
// const orange = new Fruit({
//   name: "Orange",
//   score: 8,
//   review: "Hit or Miss."
// });
// const banana = new Fruit({
//   name: "Banana",
//   score: 9,
//   review: "Great with Penut Butter."
// });

// name of mongoose model. then insertMany method with 2 parameters
// 1st - an array of objects that match that scheme (Kiwi, Orange, Banana)
// 2nd - callback to check for errors
// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });
//



// ----------------- C[R]UD ------- Find items in the database

Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  } else {
    // console.log(fruits);
    // use foreach and log only the name of the fruit

    // fruits.forEach(function(fruit){
    //   console.log(fruit.name);
    // });


    //array1.forEach(element => console.log(element));
    fruits.forEach(fruit => console.log(fruit.name));

    // ----------------- Close the connection to the database when done
    mongoose.connection.close();

  }
});




// ----------------- CR[U]D ------- Update items in the database
//https://mongoosejs.com/docs/api/model.html#model_Model.updateOne
// peachID = "60ddb3f5f2bab03e5030e184"
//
// // ({item you want to update}, {what field do you want to update}, callback function to log errors if any)
// Fruit.updateOne({_id: peachID}, {name: "Grape", review: "The red ones are the best!"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document!")
//   }
// })


// ----------------- CRU[D] ------- Delete item in the database
//https://mongoosejs.com/docs/api/model.html#model_Model.deleteOne

// ({item you want to delete}, callback function to log errors if any)
// Fruit.deleteOne({name: "Grape"},function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the document/item!")
//   }
// })



// ----------------- CRU[D] ------- Delete many items in the database
//https://mongoosejs.com/docs/api/model.html#model_Model.deleteMany

// Character.deleteMany({ name: /Stark/, age: { $gte: 18 } });
// Person.deleteMany({name: "Jon"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted all Jons")
//   }
// });





// ------------------- Adding Relationships between the People collection and the Fruits collection

const pineapple = new Fruit({
  name: "Pineapple",
  score: 10,
  review: "Always refreshing."
});
// pineapple.save();

const rose = new Person({
  name: "Rose",
  age: 36,
  favoriteFruit: pineapple
});
// rose.save();


// ------------------- CR[U]D ------- Updating relationships between People / Fruit collection
// Person.updateOne({ name: 'Jean-Luc Picard' }, { ship: 'USS Enterprise' });

// const plout = new Fruit({
//   name: "Plout",
//   score: 10,
//   review: "Gushing with Sweetness."
// });
// plout.save();
//
// Person.updateOne({name:"Jon"}, {favoriteFruit: plout}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document!")
//   }
// });
