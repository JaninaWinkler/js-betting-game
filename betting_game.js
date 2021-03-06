
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function promptForValue() {
  return prompt("Please enter a value between 5 and 10 that you want to bet: ");
}

function promptForNumber() {
  return prompt("Please enter a number between 1 and 10 that you want to bet on: ");
} 

function playGame(bankroll) {
  var randomNumber = getRandomNumber(0, 10);
  var value = promptForValue();
  while (value < 5 || value > 10) {
    value = promptForValue();
  }
  var userNumber = promptForNumber();
  while (userNumber < 1 || userNumber > 10) {
    userNumber = promptForNumber();
  }
  if (userNumber == randomNumber) {
    bankroll = bankroll + value;
    alert("Good job! You've gained $" + value + " and your bankroll is now $" + bankroll);
  }
  else if (userNumber == (randomNumber + 1) || userNumber == (randomNumber -1)) {
    alert("Almost! Because you were SO close, your bankroll stays at $" + bankroll);
  }
  else if (userNumber != randomNumber) {
    bankroll = bankroll - value;
    alert("Nope! You've lost $" + value + " and your bankroll is now $" + bankroll);
    bankroll = bankroll 
  }
  return bankroll;
}

function bettingGame() {

  var bankroll = 100;
  playing = true;

  while (playing) {  
    if (bankroll <= 0) {
      playing = false;
      alert("Game Over. Sorry!");
      break;
    } else {
      bankroll = playGame(bankroll);
    }
  }
}

bettingGame();