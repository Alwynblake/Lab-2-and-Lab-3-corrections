"use strict";
//give a message to the user
console.log('checking user userName before prompt', userName);
var userName = prompt('What is your name?');
alert('Thanks for visiting my site ' + userName);
console.log('checking userName after prompt', userName);
alert('Please respond to the following questions with Y/y/yes/YES or no...');

var correctGuess = 0;

//Question1:
//assign the variable to ask a question (return the calling string value converted to uppercase. The value will be converted to a string if it isn't one)
var likeDogs = prompt('Do I like dogs?').toUpperCase();
console.log('checking userName: ', userName);
//execute a statement if a specified condition is truthy. 
//if the condition is falsy, another statement can be executed.
if (likeDogs === 'Y' || likeDogs === 'YES') {
    alert('Congrats! ' + userName + ', you know me extremely well.')
    correctGuess++;
} else {
    alert('Sorry, ' + userName + ' you were wrong.');
}

//Question2:
var likeLearning = prompt('Do I like to learn?').toUpperCase();
console.log('Do I like learning?', likeLearning);
if (likeLearning === 'Y' || likeLearning === 'YES') {
    alert('Congrats! ' + userName + ', you know me extremely well.')
    correctGuess++;
} else {
    alert('Sorry, ' + userName + ' you were wrong.')
}

///Question3:
var likeMovies = prompt('Do I like movies?').toUpperCase();
console.log('Do I like movies?', likeMovies);
if (likeMovies === 'Y' || likeMovies === 'YES') {
    alert('Congrats! ' + userName + ', you know me extremely well.')
    correctGuess++;
} else {
    alert('Sorry, ' + userName + ' you were wrong.')
}

//Question4:
var likeFood = prompt('Do I like to eat good food?').toUpperCase();
console.log('Do I like food?', likeFood);
if (likeFood === 'Y' || likeFood === 'YES') {
    alert('Congrats! ' + userName + ', you know me extremely well.')
    correctGuess++;
} else {
    alert('Sorry, ' + userName + ' you were wrong.')
}

//Question5:
var likeIcecream = prompt('Do I like to ice cream?').toUpperCase();
console.log('Do I like ice cream?', likeIcecream);
if (likeIcecream === 'Y' || likeIcecream === 'YES') {
    alert('Congrats! ' + userName + ', you know me extremely well.')
    correctGuess++;
} else {
    alert('Sorry, ' + userName + ' you were wrong.')
}

//Question6:
//Assign a variable
var favNumber = 32
var counter = 0;
//Create a loop to execute a specified statement as long as the test condition is true. 
var numberGuess = parseInt(prompt('guess my favorite number. you have four chances!'));

//The condition is also evaluated before executing the statement:
while (numberGuess !== favNumber && counter < 3) {
    console.log(counter);
    counter++;
    //Execute a statement if a specified condition is truthy. 
    //If the condition is falsy, another statement can be executed.
    if (numberGuess < favNumber) {
        //If user enters a number, return the integer value parsed up to that point
        numberGuess = parseInt(prompt('Your guess was too low. Try again'))

    } else if (numberGuess > favNumber) {
        numberGuess = parseInt(prompt('Your guess was too high. Try again.'));
    }
}
if (numberGuess === favNumber) {
    alert('Correct!');
    correctGuess++;
} else {
    alert('The number is ' + favNumber);
}

//Question7:
//define the value for placesLived

// function yesNo7() {
var state = ['NEW YORK', 'TEXAS', 'MASSACHUSETTS', 'HAPPY PLACE', 'PEACEFUL PLACE'];
var stateGuess = prompt('Guess what state I have lived in besides Washington? (you have 6 guesses').toUpperCase();
console.log('where have I lived', stateGuess);
var correct = false;
var counterA = 0;

while (counterA < 7) {

    // check the entire length of the array
    for (var i = 0; i <= state.length; i++) {
        if (stateGuess === state[i]) {
            alert('Correct!');
            correct = true;
            correctGuess++;
            break;
        }
    }
    if (correct === true) {
        break;
    } else {
        stateGuess = prompt('Incorrect, please try again').toUpperCase();
        // if its an incorrect guess, check the number of guess made and add increments of one.
        counterA++
    }
}
// }
// call the function
// yesNo7();

alert('Thank you for playing. you got ' + correctGuess + ' correct.'); 