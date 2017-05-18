(function(angular) {

  angular.module('app').component('viewMain', {
    templateUrl:  'app/components/main/view-main-template.html',
    controller: ['$state', 'couplesFactory', viewMain],
    controllerAs: 'viewMain'
  });

  function viewMain($state, couplesFactory) {
    var vm = this;

    vm.$onInit = function() {
      couplesFactory.getCards();
    };

    vm.actions = {};

    vm.actions.goToLogin = function() {
       $state.go('login');
     };
  }

 

})(angular);
