// Crystal values

var crystalChoices = [1,2,3,4,5,6,7,8,9,10,11,12];

// score counter

var wins = 0;
var losses = 0;

// Create variables that hold references to the places in the HTML where we want to display things.

var userWins= document.getElementById('wins-text');
var userLosses = document.getElementById('losses-text');
var userChoice = document.getElementById('userchoice-text');

var computerGuess = crystalChoices[Math.floor(Math.random() * crystalChoices.length)];
console.log(computerGuess);

// Display the user and computer guesses, and wins/losses left.
//   computerChoiceText.textContent = 'The computer chose: ' + computerGuess;
userWins.textContent = "wins: " + wins;
userLosses.textContent = "losses: " + losses;

// crystal values
var crystal1 = crystalChoices;
var crystal2 = crystalChoices;
var crystal3 = crystalChoices;
var crystal4 = crystalChoices;


// document.getElementById("demo").addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = crystalChoices;







// for(var i = 0; )