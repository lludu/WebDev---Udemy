
function lifeInWeeks(age) {

/************Don't change the code above************/

    //Write your code here.

    //-----1. Prompt the user for their age.

    var age = prompt('How old are you? ');

    yearsLeft = 90 - age;
    // console.log('you have ' + yearsLeft + ' years left.');
    //
    // monthsLeft = yearsLeft * 12;
    // console.log('you have ' + monthsLeft + ' months left.');
    //
    // weeksLeft = yearsLeft * 52 ;
    // console.log('you have ' + weeksLeft + ' weeks left.');
    //
    // daysLeft =  yearsLeft * 356 ;
    // console.log('you have ' + daysLeft + ' days left.');


    console.log('You have ' + yearsLeft*356 + ' days, ' + yearsLeft*52+ ' weeks, and ' + yearsLeft*12+ ' months left.')


/*************Don't change the code below**********/
}

lifeInWeeks();
