(function() {
  function Cookies($rootScope, $cookies, $uibModal) {
    $cookies.remove('blocChatCurrentUser');
    var currentUser = $cookies.get('blocChatCurrentUser');
    
    Cookies.sayhello = function(){
      console.log("say hello")
    }

    if (!currentUser || currentUser === '') {
      $rootScope.modal = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl',
        controllerAs: 'modal',
        size: 'sm',
        backdrop: 'static',
        keyboard: 'false'
      });
    }
    
    return Cookies;
  }

  angular
    .module('blocChat')
    .run(['$rootScope', '$cookies', '$uibModal', Cookies]);
})();