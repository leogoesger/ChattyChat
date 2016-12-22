(function() {
     function ModalCtrl() {
     	this.rdm = "Chat Test";
     }
 
     angular
         .module('blocChat')
         .controller('ModalCtrl', [ModalCtrl]);
 })();