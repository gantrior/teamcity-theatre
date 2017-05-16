(function() {
  "use strict";

  angular.module('app').controller('viewDetailsController', ['viewsService', 'config.shared', 'lodash', '$modal', viewDetailsController]);
    
  function viewDetailsController(viewsService, shared, _, $modal) {
    var vm = this;
    vm.shared = shared;
    var modalDialog;

    vm.dialogCallback = function() {
      if (modalDialog && typeof modalDialog.dismiss === "function")
        modalDialog.close();
    }

    vm.openTileFormDialog = function (tile) {
      modalDialog = $modal.open({
        templateUrl: 'app/config/view.tile.form.dialog.html',
        controller: 'viewTileFormController',
        controllerAs: 'vm',
        resolve: {
          view: function () {
            return vm.shared.selectedView;
          },
          tile: function () {
            return tile;
          },
          callback: function () {
            return vm.dialogCallback;
          }
        }
      });
    };

    vm.openTileDeleteDialog = function(tile) {
      modalDialog = $modal.open({
        templateUrl: 'app/config/view.tile.delete.dialog.html',
        controller: 'viewTileDeleteController',
        controllerAs: 'vm',
        resolve: {
          view: function () {
            return vm.shared.selectedView;
          },
          tile: function () {
            return tile;
          },
          callback: function () {
            return vm.dialogCallback;
          }
        }
      });
    }


  }
})();