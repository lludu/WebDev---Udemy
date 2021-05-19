// Select a random name from an array of names. That person will pay for everyone's meal that day

// Do not use alerts, prompts, console.logs, you should use a return from the function

// example input
// ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

//example output
// Michael is going to buy lunch today!



function whosPaying(names) {

  //My solution
  var namesList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

  var buyer = Math.floor(Math.random() * namesList.length);
  document.getElementById('lunchy').innerHTML = namesList[buyer] + " is going to buy lunch today!"

  return namesList[buyer] + " is going to buy lunch today!"

  //Class solution
  // var numberOfPeople = names.length;
  // var randomPersonPosition = Math.floor(Math.random() * numberofPeople);
  // var randomPerson = names[randomPersonPosition];
  //
  //
  // document.getElementById('lunchy').innerHTML = randomPerson + " is going to buy lunch today!";
  //
  // return randomPerson + " is going to buy lunch today!";


}
