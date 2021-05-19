// A common interview question is FizzBuzz.

// Fizzbuzz is a program that prints the numbers 1 to 100.
// 1. For every mulitple of 3 print "fizz" instead of the number.
// 2. For every multiple of 5 print "buzz" instead of the number.
// 3. For every multiple of 3 and 5 print "fizzbuzz" instead of the number.


var output = []; //start an empty array which we will use to store the numbers
var count = 1; //start the numerical count at 1

function fizzBuzz() {

  //write code here

  while (count <= 100) {



    // Step 2: Find out if the count if divisible by 3, 5, or both. Order matters, start with 3 & 5
    if (count % 3 === 0 && count % 5 === 0) {
      output.push(' fizzBuzz')
    } else if (count % 3 === 0) {
      output.push(" fizz");
    } else if (count % 5 === 0) {
      output.push(" buzz");
    } else {
      output.push(" " + count);
    }

    count++;
  }

  console.log(output);
  document.getElementById('fizzy').innerHTML = output;

}
