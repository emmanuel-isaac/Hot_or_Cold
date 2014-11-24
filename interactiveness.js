// The Object Literal Pattern

var gameController = {
	getRandom: function () {
    var randomNumber = Math.ceil(Math.random() * 100);
    return randomNumber;
  },

  computerChoice: 0,
  oldDifference: 100,
  newDifference: 0,
  userPick: 0,
  userChoice: 0,
  submit: null,

  init: function () {
    this.computerChoice = this.getRandom();
    console.log("secret number is: " + this.computerChoice);
  },

  pick: function (e) {
    e.preventDefault();
    if ( !isNaN(this.game.userPick.value) && this.game.userPick.value >= 0 && this.game.userPick.value <= 100 ) {
      this.game.userChoice = parseInt(this.game.userPick.value);
      this.game.newDifference = Math.abs(this.game.userChoice - this.game.computerChoice);
    }
    else document.getElementById("user-feedback").innerHTML = "Please, make a valid entry";

    if (this.game.newDifference == 0) {
      document.getElementById("user-feedback").innerHTML = "You guessed right";
    }
    else if ( this.game.newDifference < this.game.oldDifference ) {
      document.getElementById("user-feedback").innerHTML = "You're getting hotter";
      this.game.oldDifference = this.game.newDifference;
    }
    else if ( this.game.newDifference > this.game.oldDifference ) {
      document.getElementById("user-feedback").innerHTML = "You're getting colder";
    }
  },

  chooseNumber: function () {
    this.userPick = document.getElementById("user-entry");
    this.submit = document.getElementById("submit");
    this.submit.game = this;

    this.submit.addEventListener("click", this.pick);
  }
  
};

gameController.init();

gameController.chooseNumber();


while (gameController.newDifference > 0) {
  gameController.chooseNumber();
}


