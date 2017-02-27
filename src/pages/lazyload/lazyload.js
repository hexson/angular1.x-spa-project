(function(){
  'use strict';

  angular.module('app')
  .controller('lazyloadctr', ['utils', function(_u){
    _u.hljs(angular.element(document).find('pre'));
  }]);
})();