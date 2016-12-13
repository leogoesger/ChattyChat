(function() {
  function Message($firebaseArray, Room) {
  	var ref =  firebase.database().ref().child("messages")
    
    Message.getByRoomId = function(roomId){
    	var refNew = ref.orderByChild("roomId").equalTo(Room.currentRoom['$id']);
	    var messages = $firebaseArray(refNew);
	    Message.msg = messages;
    };

    ref.on("value", function(){
    	console.log("changed")
    });
		
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', 'Room', Message]);
  }
)();