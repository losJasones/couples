(function (angular) {

    angular.module('app').component('cardsCard', {
        templateUrl: 'app/components/game/card/card-template.html',
        controller: ['couplesFactory','$timeout', cardsCard],
        controllerAs: 'cardsCard',
        bindings: {
            itemCard: '<'
        }
    });

    function cardsCard(couplesFactory, $timeout) {
        var vm = this;
        vm.$onInit = function () {};
    }
})(angular);

