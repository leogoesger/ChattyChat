(function() {
     function ModalCtrl($scope, Room) {
     	  $scope.master = {};

      $scope.update = function(room) {
        $scope.master = angular.copy(room);
        Room["all"].$add({ Name : room.name }).then(function(ref) {
		  var id = ref.key;
		  console.log("added record with id " + id);
		  Room["all"].$indexFor(id); // returns location in the array
		});
      };

      $scope.reset = function() {
        $scope.room = angular.copy($scope.master);
      };

      $scope.reset();
     }
 
     angular
         .module('blocChat')
         .controller('ModalCtrl', ['$scope', 'Room', ModalCtrl]);
 })();