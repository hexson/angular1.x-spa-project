### 初始化

#### # 模块初始化

应用模块的全局初始化及全局事件数据共享：

```javascript
angular.module('app', [
  'ui.router',
  'oc.lazyLoad',
  'config'
])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$ocLazyLoadProvider',
  '$httpProvider',
  'statics',
  function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider, statics){
    /* 路由及其他配置... */
  }
])
.run(['$rootScope', function($rootScope){
  // 全局执行的一些初始化事件等
  var init = function(){
    /* init function */
  }();
  // $rootScope上的数据和事件能在controller里面被继承
  $rootScope.userInfo = {
    /* get user info */
  };
  $rootScope.todo = function(){
    /* to do something */
  };
}]);
```

run会在config之后，controller之前被执行 *