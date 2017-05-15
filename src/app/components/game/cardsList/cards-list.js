(function (angular) {

  angular.module('app').component('cardsList', {
    templateUrl: 'app/components/game/cardsList/cards-list-template.html',
    controller: ['$state', '$timeout', 'couplesFactory', cardsList],
    controllerAs: 'cardsList'
  });

function cardsList($state, $timeout, couplesFactory) {
    var vm = this;
    vm.$onInit = function () {
      vm.remainingCards = couplesFactory.shuffleCards();
      vm.guesses = 0;
      vm.misses = 0;
      vm.shownCardsNumber = 0;
      vm.firstShownCardId = -1;
      vm.showSuccessMessage = false;
    };

    vm.actions = {};

    vm.actions.showCard = function (id) {
      if (vm.firstShownCardId != id && vm.shownCardsNumber < 2) {
        vm.shownCardsNumber++;
        couplesFactory.showCardById(id);
        vm.firstShownCardId = id;
        if (vm.shownCardsNumber == 2) {
          vm.actions.updateGuessesOrMisses();
        }
      }
    };

    vm.actions.updateGuessesOrMisses = function () {
      $timeout(function () {
        if (couplesFactory.isGuessCorrect()) {
          vm.guesses++;
          couplesFactory.deleteVisibleCards();
          if (vm.guesses > 7) {
            vm.showSuccessMessage = true;
          }
        } else {
          vm.misses++;
          couplesFactory.hideCards();
        }
        vm.shownCardsNumber = 0;
        vm.firstShownCardId = -1;
      }, 750);
    };

    vm.actions.startAgain = function () {
      vm.remainingCards = couplesFactory.shuffleCards();
      vm.shownCardsNumber = 0;
      vm.guesses = 0;
      vm.misses = 0;
      vm.showSuccessMessage = false;
    };
  }
})(angular);
