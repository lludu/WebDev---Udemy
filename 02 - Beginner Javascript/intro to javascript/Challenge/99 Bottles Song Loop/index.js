
//post the song lyrics to console with while loop

var count = 99;

function lyrics() {

    while (count >= 0) {

        if (count > 0) {
            console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. Take one down, pass it around, " + (count-1) + " bottles of beer on the wall.");
        }
        else{
            console.log("The End");
        }

        count--;
    }
};





//Class solution
// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     }
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }
