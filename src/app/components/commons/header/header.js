(function(angular) {

  angular.module('app').component('headerCouples', {
    templateUrl:  'app/components/commons/header/header-couples-template.html',
    controller: ['$state', headerCouples],
    controllerAs: 'headerCouples'
  });

  function headerCouples($state) {
    var vm = this;

    vm.goToMain = function() {
      $state.go('main');
    };
  }

})(angular);