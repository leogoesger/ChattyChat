(function() {
 function LandingCtrl(Room, Message) {
 	this.rooms = Room.rooms;
 	this.room = Room;
 	this.message = Message;
 }

 angular
     .module('blocChat')
     .controller('LandingCtrl', ['Room', 'Message', LandingCtrl]);
})();