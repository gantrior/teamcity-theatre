(function () {

  angular.module("app").factory("viewDataService", ["$http", "promisesService", "moment", "lodash", viewDataService]);

  function viewDataService($http, promise) {
    var self = this;

    self.getViewDataById = function (viewId) {
      return promise($http.get('api/viewData/' + viewId));
    };

    return self;
  }
})();