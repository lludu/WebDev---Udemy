
//Create a random number

var randomNumber1 = Math.floor(Math.random(1)*6)+1;
var randomNumber2 = Math.floor(Math.random(1)*6)+1;
console.log(randomNumber1);
console.log(randomNumber2);

//query select the image elements to change
var d1 = document.querySelector(".img1");
var d2 = document.querySelector(".img2");

//define the switch change cases
switch (randomNumber1) {
  case 1:
    d1.setAttribute("src", "images/dice1.png");
    break;
  case 2:
    d1.setAttribute("src", "images/dice2.png");
    break;
  case 3:
    d1.setAttribute("src", "images/dice3.png");
    break;
  case 4:
    d1.setAttribute("src", "images/dice4.png");
    break;
  case 5:
    d1.setAttribute("src", "images/dice5.png");
    break;
  case 6:
    d1.setAttribute("src", "images/dice6.png");
    break;
  default:
    //
}

switch (randomNumber2) {
  case 1:
    d2.setAttribute("src", "images/dice1.png");
    break;
  case 2:
    d2.setAttribute("src", "images/dice2.png");
    break;
  case 3:
    d2.setAttribute("src", "images/dice3.png");
    break;
  case 4:
    d2.setAttribute("src", "images/dice4.png");
    break;
  case 5:
    d2.setAttribute("src", "images/dice5.png");
    break;
  case 6:
    d2.setAttribute("src", "images/dice6.png");
    break;
  default:
    //
}


//query select the h1 element to change
var h = document.querySelector('h1');
console.log(h);


//compare the two dice rolls to see who won

if (randomNumber1 > randomNumber2) {
  h.innerHTML = "🚩Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
  h.innerHTML = "Player 2 Wins!🚩";
}
else {
  h.innerHTML = "Draw"
}
