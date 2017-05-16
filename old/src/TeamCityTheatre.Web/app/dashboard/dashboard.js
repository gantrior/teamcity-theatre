(function () {
  'use strict';
  var dashboardController = function (viewsService) {
    var vm = this;

    viewsService.getViews().then(function(views) {
      vm.views = views;
    });
  };
  angular
      .module('app')
      .controller('dashboardController', ['viewsService', dashboardController]);
})();
