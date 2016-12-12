(function() {
     function ChatRoomCtrl(Room, Message) {
     	this.roomName = "Chat Test";
     	this.room = Room;
     	this.message = Message;
     }
 
     angular
         .module('blocChat')
         .controller('ChatRoomCtrl', ['Room', 'Message', ChatRoomCtrl]);
 })();