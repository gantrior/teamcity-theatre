(function () {
  'use strict';
  angular
      .module('app')
      .controller('loadingController', ['$timeout', loadingController]);
  function loadingController($timeout) {
    var vm = this;

    var messages = [
      'rolling the curtains',
      'working the lights',
      'cleaning the stage',
      'DDOSing the teamcity server',
      'pretending to do something',
      'updating Windows',
      'carping the diem',
      'killing all processes',
      'testing the turrets',
      'shaking the bits',
      'downloading RAM',
      'giving up',
      'rm -rf *',
      'just kidding',
      'calibrating the flux capacitor',
      'the developers said it would be finished any second now',
      'synchronizing yo momma jokes'
    ];

    var index = 0;
    function showNextMessage() {
      var next = ((index) % messages.length);
      vm.messages = [
        messages[next] + ' …'
      ];
      index++;
      $timeout(showNextMessage, 900);
    }

    showNextMessage();
  };
})();
