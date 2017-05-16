(function () {
  'use strict';

  angular.module('app').controller('editViewController', ['viewsService', '$modalInstance', 'view', 'callback', editViewController]);

  function editViewController(viewsService, $modalInstance, view, callback) {
    var vm = this;
    vm.view = view;
    var originalName = view.name;
    $modalInstance.result.then(function() {}, function () {
      view.name = originalName;
    });
    vm.save = function() {
      viewsService.saveView(vm.view).then(callback);
    };
  }
})();