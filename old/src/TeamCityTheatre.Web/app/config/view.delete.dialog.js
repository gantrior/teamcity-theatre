(function () {
  'use strict';

  angular.module('app').controller('deleteViewController', ['viewsService', '$modalInstance', 'view', 'callback', deleteViewController]);

  function deleteViewController(viewsService, $modalInstance, view, callback) {
    var vm = this;
    vm.view = view;
    vm.delete = function() {
      viewsService.deleteView(vm.view).then(callback);
    };
  }
})();