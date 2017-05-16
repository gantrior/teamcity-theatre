(function () {
  'use strict';
  angular.module('app').controller('configController', ['config.shared', configController]);

  function configController(shared) {
    var vm = this;
    vm.shared = shared;
    // nothing yet?
  }
})();
