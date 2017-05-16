(function (moment, lodash, jQuery) {
  'use strict';
  
  // Note to self: update BundleConfig if you add modules!
  var app = angular.module('app', [
      // Angular modules 
      'ngAnimate',
      'ngRoute',
      'ngSanitize',

      'ui.bootstrap'
  ]);

  // define external libraries as injectable angular services
  app.factory('moment', [function () { return moment; }])
     .factory('lodash', [function () { return lodash; }])
     .factory('jQuery', [function () { return jQuery; }])
     .factory('settings', [function () { return window.settings; }]);


  app.run();
})(moment, _, jQuery);