(function(){
  'use strict';

  angular.module('app')
  .controller('controllerctr', ['utils', function(_u){
    _u.hljs(angular.element(document).find('pre'));
  }]);
})();