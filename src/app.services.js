(function(){
  'use strict';

  angular.module('app')
  .service('utils', [function(){
    this.hljs = function(pre){
      for (var i = 0; i < pre.length; i++){
        hljs.highlightBlock(angular.element(pre[i]).find('code')[0]);
      }
    }
  }]);
})();