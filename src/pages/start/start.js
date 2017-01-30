(function(){
  'use strict';

  angular.module('app')
  .controller('startctr', ['$scope', '$timeout', 'utils', function(vm, $timeout, _u){
    vm.isNullText = '{{data | isNull}}';
    $timeout(function(){
      _u.hljs(angular.element(document).find('pre'));
    }, 0);
  }]);
})();