


// Challenge 1: Change the users dog age to human age
// the formula is  humanAge = (dogAge - 2) x 4 + 21

//------1. create a var that stores the age the user enters via prompt.
var dogAge = prompt('What is your age of your dog?');
console.log('the inputted age is: ' + dogAge);

//----- write the javascript math and store it in a variable

humanAge = (dogAge - 2) * 4 + 21;
console.log('the human age is: ' + humanAge);

//---- return the age of the dog in human years in an alert to the user
alert('Your dog would be ' + humanAge + ' years old if it were human');
