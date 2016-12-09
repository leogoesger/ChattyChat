(function() {
     function LandingCtrl() {
     	this.heroTitle = "Chatty Chats!";
     }
 
     angular
         .module('blocChat')
         .controller('LandingCtrl', LandingCtrl);
 })();