(function() {
     function ModalCtrl() {
     	this.modal = "hello";
     }
 
     angular
         .module('blocChat')
         .controller('ModalCtrl', ModalCtrl);
 })();