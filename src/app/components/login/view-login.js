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
      vm.showOldErrorMsg = false;
      vm.newFormIsSend = false;
      vm.oldFormIsSend = false;
    };

    vm.actions = {};

    vm.actions.getAvatar=function(id){
      console.log(couplesFactory.getAvatars())
      return couplesFactory.getAvatars()[id-1].img;
    }

    vm.actions.goToGameFromNew = function () {
      vm.showOldErrorMsg=false;
      vm.oldFormIsSend = false;
      vm.oldEmail='';
      var newPlayer = {
          firstName: vm.firstName, 
          lastName: vm.lastName,
          email: vm.newEmail,
          avatar: vm.avatar
        }
      vm.newFormIsSend = true;

      if (!newPlayer.firstName || !newPlayer.lastName || !newPlayer.avatar || !newPlayer.newEmail) {
        vm.showErrorMsg = true;
      } else {
        vm.showErrorMsg = false;
      }

      if (!vm.showErrorMsg) {
        vm.newFormIsSend = false;
        couplesFactory.setUser(vm.firstName, vm.lastName, vm.newEmail,vm.avatar);
        couplesFactory.shuffleCards();
        $state.go('game', {player: newPlayer});
      };
    }

    vm.actions.goToGameFromOld = function () {
      vm.showErrorMsg=false;
      vm.newFormIsSend = false;
       vm.newEmail='';
       vm.firstName='';
       vm.lastName='';
      var oldPlayer = {
        firstName: 'Veteran player name',
        lastName: 'Veteran player last name',
        oldEmail: vm.oldEmail,
        avatar: vm.avatar,
      };
      vm.oldFormIsSend = true;

      if (!oldPlayer.oldEmail ) {
        vm.showOldErrorMsg = true;
      } else {
        vm.showOldErrorMsg = false;
      }

      if (!vm.showOldErrorMsg) {
        vm.oldFormIsSend = false;
        couplesFactory.shuffleCards();
        $state.go('game', {player: oldPlayer});
      };
    }
  }
})(angular);