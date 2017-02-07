### 表单

#### # 表单处理

表单的数据绑定及事件处理

```javascript
angular.module('app')
.controller('someCTR', ['$scope', 'utils', function($scope, utils){ // 某些依赖注入
  /* someCTR controller fnScope */
  $scope.hi = 'Hello world!';
  $scope.myName = function(){
    alert('My name is hexson.');
  };
  $scope.passwordKeyup = function(e){
    /* e => element Event Object */
    console.log(e);
  };
  /* to do something... */
}]);
```

```html
<div ng-controller="someCTR">
  <span>{{ hi }}</span>
  <button ng-click="myName()">click me.</button>
  <form name="signUpForm">
    <input type="text" ng-model="user.firstName" /> <!-- the input value <=> $scope.user.firstName -->
    <input type="text" ng-model="user.lastName" /> <!-- the input value <=> $scope.user.lastName -->
    <input type="password" ng-model="user.password" ng-keyup="passwordKeyup($event)" /> <!-- $event => the element Event Object -->
    <!-- ng-value: 赋值，但数据不绑定 -->
    <!-- ng-selected: selected 判定 -->
    <!-- ng-checked: checked 判定 -->
    <!-- ng-disabled: disabled 判定 -->
    <!-- ng-options or ng-repeat: 遍历 list 生成选项 -->
    <!-- ng-submit: 设置 submit -->
    <!-- ... -->
  </form>
  <!-- other html... -->
</div>
```

上面简单示例的实现：

<form name="signUpForm">
  <label>
    <input type="text" placeholder="姓氏" ng-model="user.firstName" />
    <span>$scope.user.firstName: {{user.firstName || 'null'}}</span>
  </label>
  <label>
    <input type="text" placeholder="名字" ng-model="user.lastName" />
    <span>$scope.user.lastName: {{user.lastName || 'null'}}</span>
  </label>
  <label>
    <input type="password" placeholder="密码" ng-model="user.password" ng-keyup="passwordKeyup($event)" />
    <span>The element keyup fn Event keyCode: {{user.passwordEvent.keyCode || 'null'}}</span>
  </label>
</form>