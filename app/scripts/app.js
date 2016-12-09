 (function() {
     function config($stateProvider, $locationProvider) {
     	$locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         $stateProvider
         .state('landing', {
             url: '/',
             controller: 'LandingCtrl as landing',
             templateUrl: './templates/landing.html'
         })
         .state('room', {
             url: '/newRoom',
             controller: 'RoomCtrl as Room',
             templateUrl: './templates/newRoom.html'
         });
     }
 
     angular
         .module('blocChat', ['ui.router', 'firebase', 'uibModal'])
         .config(config);
 })();