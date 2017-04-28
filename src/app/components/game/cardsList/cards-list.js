(function (angular) {

  angular.module('app').component('cardsList', {
    templateUrl: 'app/components/game/cardsList/cards-list-template.html',
    controller: ['$state', '$timeout', 'couplesFactory', cardsList],
    controllerAs: 'cardsList'
  });

  function cardsList($state, $timeout, couplesFactory) {
    var vm = this;

    vm.$onInit = function () {
      vm.remainingCards = couplesFactory.getRemainingCards();
      vm.guesses = 0;
      vm.misses = 0;
    };

    vm.actions = {};
    vm.actions.start = function () {
      couplesFactory.shuffleCards();
      vm.remainingCards = couplesFactory.getRemainingCards();
    };
    vm.actions = {};
    vm.actions.selectCard = function (id) {
      couplesFactory.selectCardById(id);
      //vm.actions.refreshPage();
    }
    vm.actions.refreshPage = function () {
      $timeout(function () {
        console.log('Dentro del timeout')
        vm.remainingCards = couplesFactory.getRemainingCards();
      }, 0);
    }

  }

})(angular);
