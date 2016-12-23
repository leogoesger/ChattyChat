(function() {
  function Message($rootScope, $firebaseArray, Room, $cookies) {
  	var ref =  firebase.database().ref().child("messages");

    Message.getByRoomId = function(roomId){
    	var refNew = ref.orderByChild("roomId").equalTo(Room.currentRoom['$id']);
	    var messages = $firebaseArray(refNew);
	    Message.msg = messages;
    };
		
    Message.send = function(newMessage){
      var messages = $firebaseArray(ref)
      messages.$add({ content : newMessage, roomId : Room.currentRoom['$id'], userName : $cookies.get('blocChatCurrentUser'), sentAt : (new Date)}).then(function(ref) {
        var id = ref.key;
        console.log("added record with id " + id);
        messages.$indexFor(id); // returns location in the array
      });
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$rootScope', '$firebaseArray', 'Room', '$cookies', Message]);
  }
)();