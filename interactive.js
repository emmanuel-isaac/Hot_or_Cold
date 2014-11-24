// Hot or Cold guess
// User tries to guess the random number picked by the computer


var getRandom = function () {
	var randomNumber = Math.ceil(Math.random() * 100);
	return randomNumber;
}

var computerChoice = getRandom();
console.log( "secret number is: " + computerChoice );

var oldDifference = 100;
var newDifference;

var userPick;
var userChoice;
var submit;

var pick = function (e) {
  e.preventDefault();
  if ( !isNaN(userPick.value) && userPick.value >= 0 && userPick.value <= 100 ) {
    userChoice = parseInt(userPick.value);
    newDifference = Math.abs(userChoice - computerChoice);
  }
  else document.getElementById("user-feedback").innerHTML = "Please, make a valid entry";

  if (newDifference == 0) {
    document.getElementById("user-feedback").innerHTML = "You guessed right";
  }
  else if ( newDifference < oldDifference ) {
    document.getElementById("user-feedback").innerHTML = "You're getting hotter";
    oldDifference = newDifference;
  }
  else if ( newDifference > oldDifference ) {
    document.getElementById("user-feedback").innerHTML = "You're getting colder";
  }
}


  

var chooseNumber = function () {
userPick = document.getElementById("user-entry");
submit = document.getElementById("submit");

submit.addEventListener("click", pick);


} // ends chooseNumber

chooseNumber();


while (newDifference > 0) {
  chooseNumber();

}
