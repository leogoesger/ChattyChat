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
              bindings: {
                resolve: '<',
                close: '&',
                dismiss: '&'
              },
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
         })
         .state('chats', {
             url: '/chats',
              bindings: {
                resolve: '<',
                close: '&',
                dismiss: '&'
              },
             views: {
                'chatRooms': {
                    templateUrl: './templates/rooms.html',
                    controller: 'LandingCtrl as landing'
                },
                'content': {
                    templateUrl: './templates/chats.html',
                    controller: 'ChatCtrl as chat'
                }
            }
         });
     }
 
     angular
         .module('blocChat', ['ui.router', 'firebase', 'ngAnimate'])
         .config(config);
 })();