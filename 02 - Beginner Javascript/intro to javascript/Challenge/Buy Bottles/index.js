




function getMilk(money) {

  var money = prompt('How much money do you have?');
  bottles = Math.floor(money / 1.5);

  console.log("You can buy " + bottles + " of bottles with your money");
}

getMilk();
