(function(){
  'use strict';

  angular.module('app')
  .controller('runctr', ['utils', function(_u){
    _u.hljs(angular.element(document).find('pre'));
  }]);
})();