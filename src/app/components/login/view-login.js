(function (angular) {

  angular.module('app').component('viewLogin', {
    templateUrl: 'app/components/login/view-login-template.html',
    controller: ['$state', 'couplesFactory', viewLogin],
    controllerAs: 'viewLogin'
  });

  function viewLogin($state, couplesFactory) {
    var vm = this;

    vm.$onInit = function () {
      vm.showErrorMsg = false;
      vm.formIsSend = false;
    };

    vm.actions = {};

    vm.actions.goToGame = function () {
      var newPlayer = {
        firstName: vm.firstName,
        lastName: vm.lastName,
        avatar: vm.avatar,
      };
      vm.formIsSend = true;

      if (!newPlayer.firstName || !newPlayer.lastName || !newPlayer.avatar ) {
        vm.showErrorMsg = true;
      } else {
        vm.showErrorMsg = false;
      }

      if (!vm.showErrorMsg) {
        vm.formIsSend = false;
        couplesFactory.shuffleCards();
        $state.go('game', {player: newPlayer});
      };
    }
  }
})(angular);