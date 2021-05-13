// Write a program that works out whether if a given year is a leap year. A normal year has 365
// days, leap years have 366, with an extra day in February. The reason why we have leap years is
// really fascinating.
//
// This is how to work out wheter if a particular year is a leap year:
//
// 1. A year is a leap year if it is evenly divisible by 4.
//
// 2. EXCEPT if that year is also evenly divisble by 100.
//
// 3. UNLESS that year is also evenly divisible by 400.
//
//
// e.g. Is the year 2000 a leap year?
// 1. 2000 / 4 = 500 -> Yes it is
// 2. 2000/100 = 20 -> No it is not since it fails step 2
// 3. 2000/400 = 5 -> But step 2 is invalid since it passes step 3.
//
// e.g. Is the year 2100 a leap year?
// 1. 2000 / 4 = 525 -> Yes it is
// 2. 2000/100 = 21 -> No it is not since it fails step 2
// 3. 2000/400 = 5.25 -> No since it failed both step 2 and 3.
//
// The output for the challenge must be formatted exactly as the following:
//
// if it is a leap year output "Leap year."
//
// if it is not a leap year output "Not leap year."

function isLeap(year) {

/**************Don't change the code above****************/

    if (year % 4 === 0) {
      //4 was good, next step

                  if (year % 100 === 0) {
                    //100 was good, next step

                                if (year % 400 === 0) {
                                  return "Leap year."
                                }
                                else {return "Not leap year."}

                  }
                  else {
                    return "Leap year."
                  }
    }
    else {return "Not leap year."}



/**************Don't change the code below****************/

}

isLeap(2000);




//-----------Practice Function BMI Calc w/ If-else -------------//
// function bmiCalculator (weight, height) {
//     var bmi = Math.round(weight / (height*height));
//
//     if (bmi < 18.5) {
//     return "Your BMI is " + bmi + ", so you are underweight.";
// }
// if (bmi >= 18.5 && bmi < 24.9) {
//     return "Your BMI is " + bmi + ", so you have a normal weight.";
// }
// else {
//     return "Your BMI is " + bmi + ", so you are overweight.";
// }
// }
