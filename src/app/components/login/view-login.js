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
      vm.showNotNewErrorMsg = false;
      vm.showNotOldErrorMsg = false;
      vm.newFormIsSend = false;
      vm.oldFormIsSend = false;
    };

   vm.actions = {};

   vm.actions.getAvatar = function (id) {
      return couplesFactory.getAvatars()[id - 1].img;
    }

   vm.actions.goToGameFromNew = function () {
      vm.showOldErrorMsg = false;
      vm.showNotOldErrorMsg = false;
      vm.oldFormIsSend = false;
      vm.oldEmail = '';
      if (!vm.firstName || !vm.lastName || !vm.avatar || !vm.newEmail) {
        vm.showErrorMsg = true;
        vm.newFormIsSend = true;
      } else {
        vm.showErrorMsg = false;
        vm.newFormIsSend = false;
        var newPlayer;
        var promise = couplesFactory.getUser(vm.newEmail);
        promise.then(function (restResponse) {
          newPlayer = restResponse;
          if (newPlayer.email) {
            vm.showNotNewErrorMsg = true;
            vm.newFormIsSend = true;
          } else {
            newPlayer = {
              firstName: vm.firstName,
              lastName: vm.lastName,
              email: vm.newEmail,
              avatar: {
                id: vm.avatar.substring(6),
                name: vm.avatar,
                img: vm.avatar + '.png'
              }
            }
            couplesFactory.saveUser(vm.firstName, vm.lastName, vm.newEmail, vm.avatar);
            couplesFactory.shuffleCards();
            $state.go('game', { player: newPlayer });
          };
         }, function (error) { console.log(error) });
        }
      }

 vm.actions.goToGameFromOld = function () {
    vm.showErrorMsg = false;
    vm.newFormIsSend = false;
    vm.showNotNewErrorMsg = false;
    vm.newEmail = '';
    vm.firstName = '';
    vm.lastName = '';

   if (!vm.oldEmail) {
      vm.showOldErrorMsg = true;
      vm.oldFormIsSend = true;
    } else {
      vm.showOldErrorMsg = false;
      vm.oldFormIsSend = false;
      var oldPlayer = {};
      var promise = couplesFactory.getUser(vm.oldEmail);
      promise.then(function (restResponse) {
        oldPlayer = restResponse;
        if (!oldPlayer || !oldPlayer.email) {
          vm.showNotOldErrorMsg = true;
          vm.oldFormIsSend = true;
        } else {
          couplesFactory.shuffleCards();
          $state.go('game', { player: oldPlayer });
        };
      }, function (error) { console.log(error) });
    }
  }
}
})(angular);