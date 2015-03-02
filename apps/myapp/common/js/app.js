/**
 * Ionic Application
 * 
 * @author Ali Irawan
 */
var app = angular.module('starter', ['ionic', 'starter.controllers'])
.run(function($ionicPlatform) {
	
})
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "views/menu.html",
      controller: 'AppCtrl'
    })
    .state('app.home', {
      url: "/home",
      views: {
          'menuContent' :{
            templateUrl: "views/home.html",
            controller: 'HomeCtrl'
          }
      }
    });
	
	// If there's no match go to home
	$urlRouterProvider.otherwise('app/home');
});