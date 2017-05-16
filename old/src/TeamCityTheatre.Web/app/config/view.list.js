(function () {
  'use strict';
  angular.module('app').controller('viewListController', ['viewsService', 'config.shared', 'lodash', '$modal', viewListController]);

  function viewListController(viewsService, shared, _, $modal) {
    var vm = this;
    vm.views = [];
    vm.shared = shared;
    vm.loadViews = function () {
      viewsService.getViews().then(function (views) {
        vm.selectView(null);
        vm.views = views;
      });
    };
    vm.openEditViewDialog = function (view) {
      vm.modalDialog = $modal.open({
        templateUrl: 'app/config/view.edit.dialog.html',
        controller: 'editViewController',
        controllerAs: 'vm',
        resolve: {
          view: function () { return view; },
          callback: function () { return vm.saveViewCallback; }
        }
      });
    };
    vm.closeModalDialog = function () {
      if (vm.modalDialog && typeof vm.modalDialog.dismiss === "function")
        vm.modalDialog.close();
    };
    vm.saveViewCallback = function (savedView) {
      vm.views = _.filter(vm.views, function (v) { return v.id !== savedView.id });
      vm.views.push(savedView);
      vm.selectView(savedView);
      vm.closeModalDialog();
    };

    vm.openDeleteViewDialog = function (view) {
      vm.modalDialog = $modal.open({
        templateUrl: 'app/config/view.delete.dialog.html',
        controller: 'deleteViewController',
        controllerAs: 'vm',
        resolve: {
          view: function () { return view; },
          callback : function() { return vm.deleteViewCallback; }
        }
      });
    }

    vm.deleteViewCallback = function() {
      vm.loadViews();
      vm.closeModalDialog();
    };

    vm.selectView = function (view) {
      vm.shared.selectedView = view;
    };

    vm.loadViews();
  };

})();