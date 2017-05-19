(function(angular) {

  angular.module('app').component('footerCouples', {
    templateUrl:  'app/components/commons/footer/footer-couples-template.html',
    controller: ['$state', footerCouples],
    controllerAs: 'footerCouples'
  });

  function footerCouples($state) {
    var vm = this;

    vm.goToAbout = function() {
      $state.go('about');
    };

     vm.goToTopscores = function() {
       $state.go('topscores');
     };
  }

})(angular);