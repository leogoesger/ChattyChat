(function() {
  function Cookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', Cookies]);
})();