// Hot or Cold guess
// User tries to guess the random number picked by the computer


var getRandom = function () {
	var randomNumber = Math.ceil(Math.random() * 100);
	return randomNumber;
}

var computerChoice = getRandom();
console.log( "secret number is: " + computerChoice );
var userChoice;
var oldDifference;
var newDifference;

// function to prompt user to make a guess
// and save user input
var pick = function () {
  userPick = prompt( "Pick a number between 1 and 100" );
  if ( userPick >= 0 && userPick <= 100 ) {
    userChoice = userPick;
  }

  // else alert( "Please, refresh page and make a valid entry" );
  else document.getElementById("user-feedback").innerHTML = "Please, refresh page and make a valid entry";
}


// function to find the difference between the user entry \\
// and the comnputer's choice
var difference = function () {

	newDifference = Math.abs(userChoice - computerChoice); // difference initialization
}

// function to compare computer's choice and user's choice
var comparison = function () {
  if ( newDifference == 0 ) {
    document.getElementById("user-feedback").innerHTML = "You guessed right!!!";
  }

  if ( newDifference > 0 ) {
    document.getElementById("user-feedback").innerHTML = "You're getting hotter!";
  }

}

// function to compare computer choice and user choice after first entry
// by the user
var newComparison = function () {
    if ( newDifference == 0 ) {
      document.getElementById("user-feedback").innerHTML = "You guessed right!!!";
    }

    else if ( newDifference > oldDifference ) {
      document.getElementById("user-feedback").innerHTML = "You're getting colder, Polar bear!";
    }

    else if ( newDifference < oldDifference ) {
      document.getElementById("user-feedback").innerHTML = "You're getting hotter!";
      oldDifference = newDifference;
    }
  }

// function calls
pick();
difference();
comparison();
oldDifference = newDifference;

while (newDifference > 0) {
  pick();
  difference();
  newComparison(); 
}
