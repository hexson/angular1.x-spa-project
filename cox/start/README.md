### 起步

#### # 开发目录：src

```text
|- components/ ----------- 组件
|- css/ ------------------ CSS(如果有)
|- less/ ----------------- LessCSS
|- js/ ------------------- Js(如果有)
|- pages/ ---------------- 页面及controllerJs
|- index.html ------------ 网页入口Html
|- app.js, app.*.js ------ 应用模块Js
```

#### # 模块配置：app.config.js

这里可以配置一些应用所需的公用引用，例如静态资源入口：

```javascript
angular.module('config', [])
.constant('statics', {
  path: 'dist/'
})
// 以键值对的形式配置，值不限于object
.constant('hi', 'hello');

// 在应用中引入config
angular.module('app', [
  'config'
])
// 在应用中读取config
.controller('somectr', ['hi', function(hi){
  console.log(hi); // hello
}]);
```

#### # 管道过滤：app.filter.js

自定义一些全局管道过滤规则：

```javascript
angular.module('app')
.filter('isNull', function(){
  return function(input){
    return input || '/';
  }
});

// 使用配置好的{isNull}规则，若值为空，则输出：/
// <span>{{data | isNull}}</span>
```

#### # 应用服务：app.servives.js

创建应用自定义服务：

```javascript
angular.module('app')
.service('utils', ['$http', function($http){
  this.getList = function(success, error){
    success && $http.get('xxx/apiurl').success(success).error(error || function(){ /* default error fn */ });
  };
}])
// 使用自定义服务
.controller('somectr', ['$scope', 'utils', function(vm, utils){
  utils.getList(function(data){
    vm.list = data;
  });
}]);
```