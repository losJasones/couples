(function(angular) {

  angular.module('app').component('headerCouples', {
    templateUrl:  'app/components/commons/header/header-couples-template.html',
    controller: ['$state', 'couplesFactory' ,headerCouples],
    controllerAs: 'headerCouples'
  });

  function headerCouples($state, couplesFactory) {
    var vm = this;

    vm.goToMain = function() {
      $state.go('main');
    };
  }

})(angular);