(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    
/*
    rooms.$add({ Name: "Chat Room" }).then(function(ref) {
      var id = ref.key;
      console.log("added record with id " + id);
      rooms.$indexFor(id); // returns location in the array
    });
*/

    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();