(function(){
  'use strict';

  angular.module('app')
  .controller('validatectr', ['$scope', 'utils', function(vm, _u){
    _u.hljs(angular.element(document).find('pre'));
    vm.validate = function(e){
      e && e.stopPropagation && e.stopPropagation();
    };
  }]);
})();