(function() {
     function ChatRoomCtrl(Room, Message) {
     	this.roomName = "Chat Test";
     	this.room = Room;
     	this.message = Message;
     	this.class = "odd";

     	this.appliedClass = function(){
     		if(this.class){
     			this.class = false;
     			console.log("dd")
     			return "odd";
     		} else {
     			this.class = true;
     			console.log("ff")
     			return "even";
     		}
     	}
     }
 
     angular
         .module('blocChat')
         .controller('ChatRoomCtrl', ['Room', 'Message', ChatRoomCtrl]);
 })();