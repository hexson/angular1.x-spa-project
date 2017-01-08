(function(){
  'use strict';

  angular.module('app')
  .controller('header', ['$scope', function(vm){
    vm.header = 'header';
  }]);
})();