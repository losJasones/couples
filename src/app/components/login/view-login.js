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
      vm.showSuccessMsg = false;
      vm.formIsSend = false;
    };

    vm.renders = {};


    vm.actions = {};

    vm.actions.goToGame = function () {
      vm.showSuccessMsg = false;
      var newPlayer = {
        firstName: vm.firstName,
        lastName: vm.lastName,
        avatar: vm.avatar
      };
      vm.formIsSend = true;

      if (!newPlayer.firstName || !newPlayer.lastName || !newPlayer.avatar ) {
        vm.showErrorMsg = true;
      } else {
        vm.showErrorMsg = false;
      }

      if (!vm.showErrorMsg) {
        vm.formIsSend = false;
        vm.showSuccessMsg = true;
        $state.go('game', {player: newPlayer});
      };
    }

  }

})(angular);