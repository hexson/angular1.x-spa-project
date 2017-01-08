(function(){
  'use strict';

  angular.module('app')
  .controller('index', ['$scope', function(vm){
    vm.text = 'load success.';
  }]);
})();