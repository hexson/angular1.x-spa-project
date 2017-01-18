(function(){
  'use strict';

  angular.module('app')
  .controller('header', ['$scope', '$state', function(vm, $state){
    vm.header = 'header';
    vm.goIndex = function(){
      $state.go('main.index');
    }
  }]);
})();