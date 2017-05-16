(function() {
  'use strict';
  angular.module('app').controller('projectDetailsController', ['projectsService', 'config.shared', '$modal', projectDetailsController]);

  function projectDetailsController(projectsService, shared, $modal) {
    var vm = this;
    vm.shared = shared;

    var modalDialog;

    vm.getProjectDisplayName = function (project) {
      if (!project) return "";
      return projectsService.getProjectDisplayName(project.id);
    }

    var getBuildConfigurationDisplayName = function(buildConfiguration) {
      return projectsService.getBuildConfigurationDisplayName(buildConfiguration);
    }

    vm.openTileFormDialog = function(buildConfiguration) {
      modalDialog = $modal.open({
        templateUrl: 'app/config/view.tile.form.dialog.html',
        controller: 'viewTileFormController',
        controllerAs: 'vm',
        resolve: {
          view: function() {
            return vm.shared.selectedView;
          },
          tile: function() {
            return {
              label: buildConfiguration.name,
              buildConfigurationId: buildConfiguration.id,
              buildConfigurationDisplayName: getBuildConfigurationDisplayName(buildConfiguration)
            };
          },
          callback: function () {
            return vm.saveTileCallback;
          }
        }
      });
    };

    vm.saveTileCallback = function(view) {
      vm.closeModalDialog();
    }

    vm.closeModalDialog = function () {
      if (modalDialog && typeof modalDialog.dismiss === "function")
        modalDialog.dismiss();
    };
  }
})();