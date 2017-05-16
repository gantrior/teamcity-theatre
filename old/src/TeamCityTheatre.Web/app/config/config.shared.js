(function() {
  angular.module('app').factory('config.shared', function() {
    this.selectedView = null;
    this.selectedProject = null;
    return this;
  });
})();