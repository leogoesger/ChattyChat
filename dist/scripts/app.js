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
                    controller: 'NewRoomCtrl as newRoom'
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
                    controller: 'ChatRoomCtrl as chat'
                }
            }
         });
     }
 
     angular
         .module('blocChat', ['ui.router', 'firebase', 'ngAnimate'])
         .config(config);
 })();