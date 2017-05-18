(function(angular) {

  angular.module('app').component('viewGame', {
    templateUrl:  'app/components/game/view-game-template.html',
    controller: ['$state', '$stateParams', viewGame],
    controllerAs: 'viewGame'
  });

  function viewGame($state, $stateParams) {
    var vm = this;

    vm.$onInit = function() {
      vm.player=$stateParams.player;
    };
  }

 

})(angular);