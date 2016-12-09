(function() {
     function ModalCtrl($uibModal, $log, $document) {
     	  var $ctrl = this;
		  $ctrl.items = ['item1', 'item2', 'item3'];

		  $ctrl.animationsEnabled = false;

		  $ctrl.open = function (size, parentSelector) {
		    var parentElem = parentSelector ? 
		      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
		    var modalInstance = $uibModal.open({
		      animation: $ctrl.animationsEnabled,
		      ariaLabelledBy: 'modal-title',
		      ariaDescribedBy: 'modal-body',
		      templateUrl: 'myModalContent.html',
		      controller: 'ModalInstanceCtrl',
		      controllerAs: '$ctrl',
		      size: size,
		      appendTo: parentElem,
		      resolve: {
		        items: function () {
		          return $ctrl.items;
		        }
		      }
		    })
		  };
     }
 
     angular
         .module('blocChat')
         .controller('ModalCtrl', ['$uibModal', '$log', '$document', ModalCtrl]);
 })();