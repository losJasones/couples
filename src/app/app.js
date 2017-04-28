'use strict';

(function (angular) {

  var projectDependencies = ['ui.router'];
  var app = angular.module('app', projectDependencies);

  app.config(['$stateProvider', '$urlRouterProvider', appConfig]);

  function appConfig($stateProvider, $urlRouterProvider) {
    var main = {
      name: 'main',
      url: '/main',
      template: '<view-main></view-main>'
    };

    var login = {
      name: 'login',
      url: '/login',
      template: '<view-login></view-login>'
    };

    var about = {
      name: 'aboutUs',
      url: '/aboutUs',
      template: '<h1 class="aboutUs">We love games as you do!</h1>'
    };

    var game = {
      name: 'game',
      url: '/game/{player:json}',
      params: {player: null },
      template: '<view-game></view-game>'
    };

    $stateProvider.state(main);
    $stateProvider.state(login);
    $stateProvider.state(about);
    $stateProvider.state(game);

    $urlRouterProvider.otherwise('/main');
  }

})(angular);