(function() {
  "use strict";

  angular.module("app").controller("viewTileFormController", ["$modalInstance", "viewsService", "lodash", "view", "tile", "callback", viewTileFormController]);

  function viewTileFormController($modalInstance, viewsService, _, view, tile, callback) {
    var vm = this;
    vm.tile = tile;
    vm.view = view;
    var originalLabel = tile.label;
    $modalInstance.result.then(function () { }, function () {
      tile.label = originalLabel;
    });
    vm.save = function () {
      var isNewTile = !tile.id || !_.some(vm.view.tiles, function (t) { return t.id === tile.id });
      if (isNewTile)
        vm.view.tiles.push(tile);
      viewsService.saveView(vm.view).then(callback);
    }
  }
})();