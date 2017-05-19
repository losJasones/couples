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

    var topscores = {
      name: 'topscores',
      url: '/topscores',
      template: '<view-topscores></view-topscores>'
    };

    var about = {
      name: 'about',
      url: '/about',
      template: '<view-about></view-about>'
    };

    var game = {
      name: 'game',
      url: '/game/{player:json}',
      params: {player: null },
      template: '<view-game></view-game>'
    };

    $stateProvider.state(main);
    $stateProvider.state(login);
    $stateProvider.state(topscores);
    $stateProvider.state(about);
    $stateProvider.state(game);

    $urlRouterProvider.otherwise('/main');
  }

})(angular);