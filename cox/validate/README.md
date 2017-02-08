### 表单验证

#### # 表单输入和提交的验证

表单输入和提交的验证，并对用户输入的非法数据进行警告。

```javascript
angular.module('app')
.controller('someCTR', ['$scope', 'utils', function($scope, utils){
  /* someCTR controller fnScope */
}]);
```

```html
<div ng-controller="someCTR">
  <form name="signUpForm" novalidate>
    <label>
      <input type="text" name="firstName" placeholder="姓氏" ng-model="user.firstName" required ng-pattern="/[a-zA-Z]/" />
      <span ng-show="signUpForm.firstName.$error.required">姓氏是必须的。</span>
      <span ng-show="signUpForm.firstName.$error.pattern">姓氏必须全是字母。</span>
    </label>
    <label>
      <input type="text" name="lastName" placeholder="名字" ng-model="user.lastName" required ng-pattern="/[a-zA-Z]/" />
      <span ng-show="signUpForm.lastName.$error.required">名字是必须的。</span>
      <span ng-show="signUpForm.lastName.$error.pattern">名字必须全是字母。</span>
    </label>
    <label>
      <input type="password" name="password" placeholder="密码" ng-model="user.password" required ng-pattern="/$[a-zA-Z](\s|\S)*/" />
      <span ng-show="signUpForm.password.$error.required">密码是必须的。</span>
      <span ng-show="signUpForm.password.$error.pattern">密码必须是字母开头。</span>
    </label>
    <label>
      <button type="submit" ng-disabled="signUpForm.$invalid">验证</button>
    </label>
  </form>
</div>
```

示例实现：

<form name="signUpForm" novalidate>
  <label>
    <input type="text" name="firstName" placeholder="姓氏" ng-model="user.firstName" required ng-pattern="/[a-zA-Z]/" />
    <span style="color: red;" ng-show="signUpForm.firstName.$dirty && signUpForm.firstName.$invalid">
      <span ng-show="signUpForm.firstName.$error.required">姓氏是必须的。</span>
      <span ng-show="signUpForm.firstName.$error.pattern">姓氏必须全是字母。</span>
    </span>
  </label>
  <label>
    <input type="text" name="lastName" placeholder="名字" ng-model="user.lastName" required ng-pattern="/[a-zA-Z]/" />
    <span style="color: red;" ng-show="signUpForm.lastName.$dirty && signUpForm.lastName.$invalid">
      <span ng-show="signUpForm.lastName.$error.required">名字是必须的。</span>
      <span ng-show="signUpForm.lastName.$error.pattern">名字必须全是字母。</span>
    </span>
  </label>
  <label>
    <input type="password" name="password" placeholder="密码" ng-model="user.password" required ng-pattern="/[a-zA-Z](\s|\S)*/" />
    <span style="color: red;" ng-show="signUpForm.password.$dirty && signUpForm.password.$invalid">
      <span ng-show="signUpForm.password.$error.required">密码是必须的。</span>
      <span ng-show="signUpForm.password.$error.pattern">密码必须是字母开头。</span>
    </span>
  </label>
  <label>
    <button type="submit" ng-disabled="signUpForm.$invalid" ng-submit="validate($event)">提交</button>
    <small style="color: #666;">本例不能提交，仅模拟验证 *</small>
  </label>
</form>