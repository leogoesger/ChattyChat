(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    Room.rooms = rooms;

    Room.addRoom = function(room){
      rooms.$add({ Name : room.name }).then(function(ref) {
        var id = ref.key;
        console.log("added record with id " + id);
        rooms.$indexFor(id); // returns location in the array
      });
    }

    Room.currentRoom = null;

    Room.setRoom = function(room){
      Room.currentRoom = room;
      console.log(Room.currentRoom);
    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();