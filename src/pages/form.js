(function(){
  'use strict';

  angular.module('app')
  .controller('formctr', ['$scope', 'utils', function(vm, _u){
    _u.hljs(angular.element(document).find('pre'));
    vm.user = {};
    vm.passwordKeyup = function(e){
      vm.user.passwordEvent = vm.user.passwordEvent || {};
      vm.user.passwordEvent.keyCode = e.keyCode;
    };
  }]);
})();