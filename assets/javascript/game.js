// Crystal values

var crystalChoices = [1,2,3,4,5,6,7,8,9,10,11,12];

// score counter

var wins = 0;
var losses = 0;

//users score
var score = 0;

// Create variables that hold references to the places in the HTML where we want to display things.

var userWins = $('#wins-text');
var userLosses = $('#losses-text');
var userScore = $('#usersScore-text');
var userResult = $('#result-text');
var computerChoice = $('#computerGuess-text');

var computerGuess = Math.floor(Math.random() * 101) + 19;
console.log(computerGuess);

// Display the user and computer guesses, and wins/losses left.
//   computerChoiceText.textContent = 'The computer chose: ' + computerGuess;
userWins.text("wins: " + wins);
userLosses.text("losses: " + losses);

// crystal values
var crystal1 = crystalChoices[Math.floor(Math.random() * crystalChoices.length)];
var crystal2 = crystalChoices[Math.floor(Math.random() * crystalChoices.length)];
var crystal3 = crystalChoices[Math.floor(Math.random() * crystalChoices.length)];
var crystal4 = crystalChoices[Math.floor(Math.random() * crystalChoices.length)];

console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);

computerChoice.text('Your number to reach is ' + computerGuess);
userScore.text('Your current score is: ' + score);


$('.rocks1').on('click', function(){
    computerChoice.text('Your number to reach is ' + computerGuess);
    userResult.text('');
    score = score + crystal1;
    userScore.text('Your current score is: ' + score);
    console.log("the value of #1 crstyal is: " + crystal1);
    checkWin();
}
)

$('.rocks2').on('click', function(){
    computerChoice.text('Your number to reach is ' + computerGuess);
    userResult.text('');
    score = score + crystal2;
    userScore.text('Your current score is: ' + score);
    console.log("the value of #1 crstyal is: " + crystal2);
    checkWin();
})

$('.rocks3').on('click', function(){
    computerChoice.text('Your number to reach is ' + computerGuess);
    userResult.text('');
    score = score + crystal3;
    userScore.text('Your current score is: ' + score);
    console.log("the value of #1 crstyal is: " + crystal3);
    checkWin();
})

$('.rocks4').on('click', function(){
    computerChoice.text('Your number to reach is ' + computerGuess);
    userResult.text('');
    score = score + crystal4;
    userScore.text('Your current score is: ' + score);
    console.log("the value of #1 crstyal is: " + crystal4);
    checkWin();
})

function restart(){
    score = 0;
    computerGuess = Math.floor(Math.random() * 101) + 19;
    crystal1 = crystalChoices[Math.floor(Math.random() * crystalChoices.length)];
    crystal2 = crystalChoices[Math.floor(Math.random() * crystalChoices.length)];
    crystal3 = crystalChoices[Math.floor(Math.random() * crystalChoices.length)];
    crystal4 = crystalChoices[Math.floor(Math.random() * crystalChoices.length)];
    computerChoice.text('Your number to reach is ' + computerGuess);}

function checkWin(){
if(score === computerGuess){
    wins += 1;
    userWins.text('Wins:' + wins);
    userResult.text('You Win!');
    // you calling restart function
    restart();
}
else if(score > computerGuess){
    losses += 1;
    userLosses.text('Losses:' + losses);
    userResult.text('You Lose');
    // you calling restart function
    restart();
}
}