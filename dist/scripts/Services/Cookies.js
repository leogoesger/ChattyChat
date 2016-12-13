(function() {
  function Cookies($cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      // Do something to allow users to set their username
      console.log("cokies")
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', Cookies]);
})();