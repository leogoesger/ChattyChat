(function() {
     function ModalCtrl($rootScope, $cookies) {
     	
     	this.updateCookie = function(name){
     		if (name){
     			$cookies.put('blocChatCurrentUser', name);
     			$rootScope.modal.close();
     			$rootScope.currentUser = name; 
     		}
     	}
     };
 
     angular
         .module('blocChat')
         .controller('ModalCtrl', ['$rootScope', '$cookies', ModalCtrl]);
 })();