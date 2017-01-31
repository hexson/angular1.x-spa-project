(function(){
  'use strict';

  angular.module('app')
  .controller('configctr', ['$scope', '$timeout', 'utils', function(vm, $timeout, _u){
    $timeout(function(){
      _u.hljs(angular.element(document).find('pre'));
    }, 0);
  }]);
})();