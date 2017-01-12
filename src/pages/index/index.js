(function(){
  'use strict';

  angular.module('app')
  .controller('index', ['$scope', '$timeout', function(vm, $timeout){
    vm.text = '一个简单易上手的SPA页面应用脚手架:';
    vm.showText = '';
    vm.attrsObject = {
      len: 1,
      direction: 1,
      list: ['数据管理系统', '商城架设', '产品及官网', 'WEB应用']
    };
    vm.showTextFn = function(){
      var len = vm.showText.length + 1;
      if (len <= vm.text.length){
        vm.showText = vm.text.substr(0, len);
        $timeout(function(){
          vm.showTextFn();
        }, 200);
      }else {
        $timeout(function(){
          vm.showTextFnAfter();
        }, 800);
      }
    };
    vm.showTextFnAfter = function(){
      var delay = 230;
      vm.showText = vm.text + ' ' + vm.attrsObject.list[0].substr(0, vm.attrsObject.len);
      if (vm.attrsObject.len == 0){
        vm.attrsObject.list.push(vm.attrsObject.list.shift());
        vm.attrsObject.direction = 1;
      }
      if (vm.attrsObject.len == vm.attrsObject.list[0].length){
        delay = 1000;
        vm.attrsObject.direction = 0;
      }
      if (vm.attrsObject.direction){
        vm.attrsObject.len++;
      }else {
        vm.attrsObject.len--;
      }
      $timeout(function(){
        vm.showTextFnAfter();
      }, delay);
    }
    vm.showTextFn();
  }]);
})();