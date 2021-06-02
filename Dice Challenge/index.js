// ----------Die 1 -------------
var randomNumber1 = Math.floor(Math.random()*6)+1;   // Rolls the die 1 - 6
console.log('%cthis is the first random dice roll: ' +randomNumber1, 'color: blue');

//Concatenate the random number, to the end of dice.png.. so a 4 produces dice4.png etc.
var randomDiceImage = "dice" + randomNumber1 + ".png";   //dice1.png to dice6.png
console.log('%cthis is the random image file: ' +randomDiceImage, 'color: green');

//Change the picture based on the random number. Using concatenation for the src attribute.
var randomImageSource = "images/" + randomDiceImage; //  images/dice1.png to dice6.png
console.log('%cthis is the random image source: ' + randomImageSource, 'color: Purple');

//change dice picture
// var dice1 = document.querySelectorAll("img")[0];
// dice1.setAttribute("src", randomImageSource);
// console.log(dice1);
dice1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);





// ----------Die 2 -------------
var randomNumber2 = Math.floor(Math.random()*6)+1; // Rolls the die 1 - 6
console.log('%cthis is the second random dice roll: ' +randomNumber2, 'color: red');

//Concatenate the random number, to the end of dice.png.. so a 4 produces dice4.png etc.
var randomDiceImage2 = "dice" + randomNumber2 + ".png";   //dice1.png to dice6.png
console.log('%cthis is the random image file: ' +randomDiceImage2, 'color: green');

//Change the picture based on the random number. Using concatenation for the src attribute.
var randomImageSource2 = "images/" + randomDiceImage2; //  images/dice1.png to dice6.png
console.log('%cthis is the random image source: ' + randomImageSource2, 'color: Purple');

//change dice picture
dice2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);




// ----------Compare the dice & Change the H1 -------------
var h = document.querySelector('h1');

if (randomNumber1 > randomNumber2) {
  h.innerHTML = "🚩Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
  h.innerHTML = "Player 2 Wins🚩";
}
else {
  h.innerHTML = "🚩Draw🚩";
}


// reset
function reset() {
    window.location.reload();
}
