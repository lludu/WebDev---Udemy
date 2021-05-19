

//-------Detect Mouse Click----------
//add event listener to each image with the .drum class
//loop through all of the drum buttons using the query on the class.
for (var i = 0; i<document.querySelectorAll('.drum').length; i++){
  document.querySelectorAll('.drum')[i].addEventListener("click", function(){
      var buttonInnerHTML = this.innerHTML.toLowerCase();
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
  });
} // end of for loop

//-------Detect Keyboard key----------
//add in the eventlistener for the keydown eventlistener
//pass the event into the function (using 'event' or 'e')
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});




//-------Play Sound----------
//create a function that gets activated by the eventListeners, both the click and keydown
function makeSound(key){


  switch (key) {
    case "a":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
      break;

    case "s":
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
      break;
    case "d":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
      break;

    case "f":
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
      break;
    case "g":
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
      break;

    case "h":
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
      break;

    case "j":
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
      break;

    case "k":
        var audio = new Audio('sounds/tink.wav');
        audio.play();
      break;

    case "l":
        var audio = new Audio('sounds/clap.wav');
        audio.play();
      break;

    case "z":
        var audio = new Audio('sounds/father.mp3');
        audio.play();
      break;
    case "/":
        var audio = new Audio('sounds/gina.m4a');
        audio.play();
      break;

    default:
      console.log(key);
  }

}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');



  // 0.075 seconds Class Remove
  setTimeout(function() {
  activeButton.classList.remove('pressed');}, 75
  );


}
