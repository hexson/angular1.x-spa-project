### 控制器

#### # 定义控制器

配合ng-controller指令定义应用程序的控制器

```javascript
angular.module('app')
.controller('someCTR', ['$scope', 'utils', function($scope, utils){ // 某些依赖注入
  /* someCTR controller fnScope */
  $scope.hi = 'Hello world!';
  $scope.myName = function(){
    alert('My name is hexson.');
  };
  /* to do something... */
}]);
```

```html
<!-- ng-controller指令定义一个控制器 -->
<div ng-controller="someCTR">
  <span>{{ hi }}</span> <!-- Hello world! -->
  <button ng-click="myName()">click me.</button> <!-- $scope.myName fn: My name is hexson. -->
  <!-- other html... -->
</div>
```

controller继承全局事件及数据，而且可以设置别名，在作用域里用 `this` 代替 `$scope`：

```javascript
angular.module('app')
.controller('someCTR', [function(){ // 某些依赖注入
  /* someCTR controller fnScope */
  var vm = this;
  vm.hi = 'Hello world!';
  vm.myName = function(){
    alert('My name is hexson.');
  };
  /* to do something... */
}]);
```

```html
<!-- ng-controller指令定义一个控制器 -->
<div ng-controller="someCTR as sc">
  <span>{{ sc.hi }}</span> <!-- Hello world! -->
  <button ng-click="sc.myName()">click me.</button> <!-- vm.myName fn: My name is hexson. -->
  <!-- other html... -->
</div>
```