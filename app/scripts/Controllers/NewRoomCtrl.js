(function() {
     function NewRoomCtrl($scope, Room) {
        $scope.master = {};

      $scope.update = function(room) {
        $scope.master = angular.copy(room);
        Room.addRoom(room);
      };

      $scope.reset = function() {
        $scope.room = angular.copy($scope.master);
      };

      $scope.reset();
     }
 
     angular
         .module('blocChat')
         .controller('NewRoomCtrl', ['$scope', 'Room', NewRoomCtrl]);
 })();
 