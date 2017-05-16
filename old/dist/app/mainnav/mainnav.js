(function () {
  'use strict';

  angular
      .module('app')
      .controller('mainnav', ['routes', 'mainnav.options', function (routes, mainNavOptions) {
        var vm = this;
        vm.routes = routes;
        vm.options = mainNavOptions;
      }]);
})();
