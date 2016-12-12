(function() {
 function LandingCtrl(Room) {
 	this.rooms = Room.rooms;
 	this.room = Room;
 }

 angular
     .module('blocChat')
     .controller('LandingCtrl', ['Room', LandingCtrl]);
})();