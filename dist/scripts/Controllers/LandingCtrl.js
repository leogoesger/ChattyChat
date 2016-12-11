(function() {
     function LandingCtrl(Room) {
     	this.rooms = Room.rooms;
     }
 
     angular
         .module('blocChat')
         .controller('LandingCtrl', ['Room', LandingCtrl]);
 })();