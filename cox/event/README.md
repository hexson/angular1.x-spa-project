### 事件

#### # 事件绑定

在处理用户交互的时候需要执行特定的事件

```javascript
angular.module('app')
.controller('someCTR', ['$scope', 'utils', function($scope, utils){
  $scope.myClick = function(){
    $scope.isHide = $scope.isHide ? false : true;
  };
}]);
```

```html
<div ng-controller="someCTR">
  <span ng-hide="isHide">My name is hexson.</span>
  <button ng-click="myClick()">show/hide</button>
  <!-- other html... -->
</div>
```

绑定事件的格式为：`ng-*="fnName()"`，如果需要获取 `Event Object`，只需传入 `$event`：`ng-*="fnName($event)"`。

```javascript
angular.module('app')
.controller('someCTR', ['$scope', 'utils', function($scope, utils){
  $scope.myClick = function(e){
    $scope.isHide = $scope.isHide ? false : true;
    console.log(e); // print Event Object
  };
}]);
```

```html
<div ng-controller="someCTR">
  <span ng-hide="isHide">My name is hexson.</span>
  <button ng-click="myClick($event)">show/hide</button>
  <!-- other html... -->
</div>
```

> 注意：函数需先在当前controller内的 `$scope` 上赋值