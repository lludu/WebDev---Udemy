//Generate a storage array for the game sequence
var gamePattern = [];
var userClickedPattern = []

var level = 0;
var started = false;




//Create a new pattern
function nextSequence() {

    $(".btn").css("pointer-events","auto");

  //reset user array to start next Level
  userClickedPattern = [];

  //Generate a random number between 0 and 3
  var randomNumber = Math.round(Math.random()*3);
  console.log(randomNumber);

  var buttonColors = ['green', 'red', 'yellow', 'blue'];
  var randomChosenColor = buttonColors[randomNumber];
  console.log('This is my chosen color: ' + randomNumber + '= ' + randomChosenColor);

  //push value into gamePattern
  gamePattern.push(randomChosenColor);
  console.log(gamePattern);

  //animate the html color using the color id and the generated number in jquery
  $('#'+randomChosenColor).animate({opacity:0.2}).animate({opacity:1});

  //Play the sound function using the randomChosenColor parameter
  playSound(randomChosenColor);

  //increase the level when nextSequence gets called
  level++;
  $('#level-title').text('Level '+level);


} // END OF NEXT SEQUENCE function




//add event listener for when user clicks on a div/button
$("[type=button]").on('click', function(eventClick) {
  //get the ID of the div/button that was clicked by the user
  userChosenColor = eventClick.target.id;
  userClickedPattern.push(userChosenColor);

  //Play the sound function using the userChosenColor parameter
  playSound(userChosenColor);
  //Add pressed class to the userChosenColor, then quickly remove it
  animatePress(userChosenColor);
  //check checkAnswer

  checkAnswer(userClickedPattern.length-1);
  console.log('User Pattern Below:');
  console.log(userClickedPattern);
  console.log('last user array pos: ' + (userClickedPattern.length-1));


}) // END OF BUTTON CLICK FUNCTION LISTENER




function playSound(name) {
  var sound = new Audio('sounds/'+name+'.mp3')
  sound.play();
} //END OF PLAY SOUND FUNCTION

function animatePress(currentColor){
  $('#'+currentColor).addClass('pressed');
  setTimeout(function(){
    $('#'+currentColor).removeClass('pressed');
  }, 50);
} //END OF ANIMATE PRESS FUNCTION




// use event listener to start the game
$(document).keydown(function(){
    if (!started){
      $('#level-title').text('Level '+level);
      nextSequence()
      started=true;
    }
    else{
      return
    }
})  // END OF KEYDOWN START CHECK


//Check the users answer
function checkAnswer(currentLevel){
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log('success');
    // check if the array lengths are the same to continue the game
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
  else {
    //play gameover sound when wrong
    var wrong = new Audio('sounds/wrong.mp3')
    wrong.play();
    //flash screen red when gameover
    $('body').addClass('game-over');
    setTimeout(function(){
      $('body').removeClass('game-over');
    }, 200);
    //change h1 to say Game Over, Press Any Key to Restart
    $('#level-title').text('Game Over, Press Any Key to Restart');
    console.log('wrong');
    startOver();
    $(".btn").css("pointer-events","none");
  }
}


function startOver(){
  level = 0;
  gamePattern=[];
  started=false;
}
