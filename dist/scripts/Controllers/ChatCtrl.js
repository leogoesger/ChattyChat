(function() {
     function ChatCtrl() {
     	this.msg = "hello"
     }
 
     angular
         .module('blocChat')
         .controller('ChatCtrl', ChatCtrl);
 })();