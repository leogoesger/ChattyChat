(function() {
     function ModalCtrl($rootScope, $cookies) {
     	this.updateCookie = function(name){
     		$cookies.put('blocChatCurrentUser', name);
     		console.log("name updated!");
     		$rootScope.modal.close();
     	}
     };
 
     angular
         .module('blocChat')
         .controller('ModalCtrl', ['$rootScope', '$cookies', ModalCtrl]);
 })();