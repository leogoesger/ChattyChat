(function() {
  function Message($firebaseArray, Room) {
  		var ref =  firebase.database().ref().child("messages")
    
    /*
    Message.setMessage = function(roomId){
    	var refNew = ref.orderByChild("roomId").equalTo(roomId);
    	var messages = $firebaseArray(refNew);
    	Message.msg = messages;
    }
    */
    ref.on('value', function(){
    	var refNew = ref.orderByChild("roomId").equalTo(Room.currentRoom['$id']);
    	var messages = $firebaseArray(refNew);
    	Message.msg = messages;
    })

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', 'Room', Message]);
  }
)();