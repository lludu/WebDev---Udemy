//-----------Practice Function 1 -------------//
// function getMilk(money) {
//   var numberOfBottles = Math.floor(money/1.5);
//   console.log("Buy " + numberOfBottles + " bottles of milk.");
//   return money % 1.5; //remainder
//
// }
//
// var change = getMilk(4);
// console.log(change);

//-----------Practice Function 2 -------------//
// function getMilk(money) {
//     console.log("Buy " + calcBottles(money, 1.5) + " bottles of milk.");
//   return money % 1.5; //remainder
//
// }
//
// function calcBottles(startingMoney, costPerBottle) {
//   var numberOfBottles = Math.floor(startingMoney/costPerBottle);
//   return numberOfBottles;
// }
//
// var change = getMilk(5);
// console.log(change);

//-----------Practice Function 3 -------------//
// function getMilk(money) {
//     console.log("Buy " + calcBottles(money, 1.5) + " bottles of milk.");
//   return calcChange(money, 1.5); //remainder
//
// }
//
// function calcBottles(startingMoney, costPerBottle) {
//   var numberOfBottles = Math.floor(startingMoney/costPerBottle);
//   return numberOfBottles;
// }
//
// function calcChange(startingAmount, costPerBottle) {
//   var change = startingAmount % costPerBottle;
//   return change;
// }
//
// var change = getMilk(5);
// console.log(change);

//-----------Practice Function 4 -------------//
function getMilk(money,costPerBottle) {
    console.log("Buy " + calcBottles(money, costPerBottle) + " bottles of milk.");
  return calcChange(money, costPerBottle); //remainder

}

function calcBottles(startingMoney, costPerBottle) {
  var numberOfBottles = Math.floor(startingMoney/costPerBottle);
  return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
  var change = startingAmount % costPerBottle;
  return change;
}

var change = getMilk(10,3);
console.log(change);
