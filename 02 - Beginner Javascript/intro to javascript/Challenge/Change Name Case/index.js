


// Challenge 1: Changing string casing in text

//------1. create a var that stores the name the user enters via prompt.
var name = prompt('What is your name?');
console.log('the inputted name is: ' + name);

//-----1.5 drop all characters to lowercase to avoid camelcase names
name = name.toLowerCase();
console.log('the lower case name is: ' + name);


//------2. capitalize the first letter of their name

//2a. Isolate the first letter
var firstChar = name.slice(0,1);
console.log('the first letter is: ' + firstChar);


//2b. Turn the first char to upper case
var upperCaseFirstChar = firstChar.toUpperCase();
console.log('the uppercase first letter is: ' + upperCaseFirstChar);


//2c. Isolate the rest of the name
var endChar = name.slice(1,(name.length));
console.log('the rest of the name is: ' + endChar);


//2d Concactenate the first char with the rest of the char
var joinName = upperCaseFirstChar + endChar;
console.log('the capitalized name is: ' + joinName);


//------3. Use the corrected capilized name to greet them via alert.
alert('Hello ' + joinName);
