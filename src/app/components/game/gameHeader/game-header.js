(function(angular) {

  angular.module('app').component('gameHeader', {
    templateUrl:  'app/components/game/gameHeader/game-header-template.html',
    controller: gameHeader,
    controllerAs: 'gameHeader',
    bindings: {
      player: '<'
    }
  });

  function gameHeader() {
    var vm = this;

    vm.$onInit = function() {
      
    };

  }

})(angular);