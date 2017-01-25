### 配置

#### # 路由配置

单页面应用的路由：先加载插件资源，然后在app module里注入router和lazyLoad模块，再进行具体的配置 *

```html
<!-- 加载插件资源 -->
<script src="dist/js/angular-ui-router/angular-ui-router.min.js"></script>
<script src="dist/js/oclazyload/ocLazyLoad.min.js"></script>
```

```javascript
// 注入router和lazyLoad模块
angular.module('app', [
  'ui.router',
  'oc.lazyLoad',
  'config'
])
// 配置路由
.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$ocLazyLoadProvider',
  'statics',
  function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, statics){
    // 设置默认路由
    $urlRouterProvider.otherwise('/main/index');
    // 设置重定向路由
    $urlRouterProvider.when('/main', '/main/index');
    // 配置主体路由
    $stateProvider.state('main', {
      url: '/main',
      // 配置公用组件
      views: {
        '': {
          templateUrl: statics.path + 'pages/main/main.html'
        },
        '@header': {
          templateUrl: statics.path + 'components/header/header.html'
        },
        '@footer': {
          templateUrl: statics.path + 'components/footer/footer.html'
        }
      },
      resolve: {
        // 懒加载静态资源
        loadMyFile: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load({
            name: 'app',
            files: [
              statics.path + 'components/header/header.js',
              statics.path + 'components/footer/footer.js'
            ]
          });
        }]
      }
    })
    // 配置其他路由
    .state('main.other', {
      url: '/other',
      templateUrl: statics.path + 'xxx/url/other.html',
      resolve: {
        loadMyFile: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load({
            name: 'app',
            files: [statics.path + 'xxx/url//other.js']
          });
        }]
      }
    });
  }
]);
```

#### # AJAX配置

全局的AJAX配置：

```javascript
app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$ocLazyLoadProvider',
  '$httpProvider',
  'statics',
  function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider, statics){
    /* 路由配置... */

    // 改变angular默认的POST请求配置
    $httpProvider.defaults.transformRequest = function(obj){
      var str = [];
      for (var p in obj){
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
      return str.join("&");
    };
    $httpProvider.defaults.headers.post = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    $httpProvider.interceptors.push(['$rootScope', function($rootScope){ // 依赖注入
      return {
        request: function(config){
          // request配置
          config.headers = config.headers || {};
          config.headers.Authorization = 'hexson';
          return config;
        },
        response: function(res){
          // 请求成功配置
          console.log('ajax success.');
          return res;
        },
        responseError: function(res){
          // 请求失败处理
          console.log(res);
          return res;
        }
      }
    }]);
  }
]);
```