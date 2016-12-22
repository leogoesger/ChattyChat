(function() {
  function Cookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      console.log("Cookies")
      
      var modal = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl as modal',
        size: 'sm'
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', Cookies]);
})();