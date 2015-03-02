/**
 * Controllers
 * 
 * @author Ali Irawan
 * 
 */
angular.module('starter.controllers', [])
.controller('AppCtrl',['$scope','$ionicSideMenuDelegate', function($scope, $ionicSideMenuDelegate){
	console.log('AppCtrl');
	
	$scope.toggleLeft = function() {
	    $ionicSideMenuDelegate.toggleLeft();
    };
    
    $scope.authorize = {
    		list: true,
    		input: true,
    		chart: true
    };
}])
.controller('HomeCtrl',['$scope', function($scope){
	console.log('HomeCtrl');
}]);
