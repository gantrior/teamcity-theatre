(function () {
  'use strict';

  var app = angular.module('app');

  // Define the routes
  app.constant('routes', [
      {
        url: '/dashboard',
        config: {
          templateUrl: 'app/dashboard/dashboard.html',
          title: 'Dashboard',
          icon: 'fa-tachometer'
        }
      },
      {
        url: '/config',
        config: {
          templateUrl: 'app/config/config.html',
          title: 'Configuration',
          icon: 'fa-cogs'
        }
      }
  ]);

  // Configure the routes and route resolvers
  app.config([
      '$routeProvider', '$locationProvider', 'routes', function ($routeProvider, $locationProvider, routes) {
        $locationProvider.html5Mode(true);
        routes.forEach(function (r) {
          $routeProvider.when(r.url, r.config);
        });
        $routeProvider.when('/dashboard/:viewName', {
          templateUrl: 'app/dashboard/view.html'
        });
        $routeProvider.otherwise({ redirectTo: 'dashboard' });
      }
  ]);
})();