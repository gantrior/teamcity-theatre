(function () {
  "use strict";

  angular.module("app").controller("viewTileDeleteController", ["$modalInstance", "viewsService", "lodash", "view", "tile", "callback", viewTileDeleteController]);

  function viewTileDeleteController($modalInstance, viewsService, _, view, tile, callback) {
    var vm = this;
    vm.tile = tile;
    vm.view = view;
    vm.delete = function () {
      vm.view.tiles = _.filter(vm.view.tiles, function (t) { return t.id !== tile.id });
      viewsService.saveView(view).then(callback);
    }
  }
})();