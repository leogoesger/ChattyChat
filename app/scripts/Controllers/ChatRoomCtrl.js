(function() {
     function ChatRoomCtrl(Room) {
     	this.roomName = "Chat Test";
     	this.room = Room;
     }
 
     angular
         .module('blocChat')
         .controller('ChatRoomCtrl', ['Room', ChatRoomCtrl]);
 })();