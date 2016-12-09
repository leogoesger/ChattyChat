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
            views: {
                'chatRooms': {
                    templateUrl: './templates/rooms.html',
                    controller: 'LandingCtrl as landing'
                },
                'content': {
                    templateUrl: './templates/landing.html',
                    controller: 'LandingCtrl as landing'
                }
            }
         })
         .state('room', {
             url: '/newRoom',
             views: {
                'chatRooms': {
                    templateUrl: './templates/rooms.html',
                    controller: 'LandingCtrl as landing'
                },
                'content': {
                    templateUrl: './templates/newRoom.html',
                    controller: 'ModalCtrl as modal'
                }
            }
         });
     }
 
     angular
         .module('blocChat', ['ui.router', 'firebase'])
         .config(config);
 })();