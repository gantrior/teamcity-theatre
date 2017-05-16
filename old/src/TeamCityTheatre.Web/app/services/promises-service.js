(function () {

  angular.module("app").factory("promisesService", ["$http", "$q", promisesService]);

  function promisesService($http, $q) {
    // ease of use wrapper to create promises from AJAX requests
    return function (request, transform) {
      if (typeof transform !== "function")
        transform = function (d) { return d; };
      var deferred = $q.defer();
      request.then(function (response) {
        deferred.resolve(transform(response.data));
      }, function () {
        deferred.reject();
      });
      return deferred.promise;
    };
  }
})();