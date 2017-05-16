(function () {

  angular.module("app").factory("viewsService", ["$http", "promisesService", "moment", "lodash", viewsService]);

  function viewsService($http, promise, moment, _) {
    var self = this;

    self.getViews = function () {
      return promise($http.get('api/views'));
    };

    self.getViewById = function (id) {
      return promise($http.get('api/views/' + id));
    }

    self.getViewByName = function (name) {
      return promise($http.get('api/views/' + name));
    }

    self.saveView = function(view) {
      return promise($http.post('api/views', view));
    }

    self.deleteView = function(view) {
      return promise($http.delete('api/views/' + view.id));
    }

    return self;
  }
})();