(function(angular) {

  angular.module('app').component('viewTopscores', {
    templateUrl:  'app/components/topscores/view-topscores-template.html',
    controller: ['couplesFactory', viewTopscores],
    controllerAs: 'viewTopscores'
  });

  function viewTopscores(couplesFactory) {
    var vm = this;

    vm.$onInit = function() {
        vm.topScores = 10;
        vm.topRecords=[];
        for (var i=1; i<=vm.topScores; i++){
          vm.topRecords[i]={
            user: {
              position: i,
              firstName: 'Frigopies',
              lastName: 'S.A.',
              avatar: 'avatar2',
              score: 0
            }
          }
        }
    };
    
  }

 

})(angular);