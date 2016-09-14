console.log('app.js loaded!');

// initialize the application
var app = angular.module("hangmanApp", []);
app.controller("hangmanCtrl", hangmanCtrl);

function hangmanCtrl() {
  var vm = this;
  vm.game = new HangmanGame("elephant");
  vm.guessLetter = function () {
    vm.game.guess(vm.input);
    vm.input = "";
  }
}
