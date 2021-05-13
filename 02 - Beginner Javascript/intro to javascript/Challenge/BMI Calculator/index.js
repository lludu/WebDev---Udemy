
//Create your function below this line.
//The first parameter should be the weight and the second should be the height.


// BMI = kg / m^2 (weight / height, squared)







/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8);

bmi should equal 20 when it's rounded to the nearest whole number.

*/

//


function bmiCalculator(weight, height) {
  var bmi = Math.round((weight / (height**2)));
  return bmi;


}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);







//-----------Practice Function 4 -------------//
// function getMilk(money,costPerBottle) {
//     console.log("Buy " + calcBottles(money, costPerBottle) + " bottles of milk.");
//   return calcChange(money, costPerBottle); //remainder
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
// var change = getMilk(10,3);
// console.log(change);
