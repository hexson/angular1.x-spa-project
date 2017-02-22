### 资源加载

#### # 配置

提供三个配置项，分别是 `debug[Boolean]` `events[Boolean]` `modules[Array of Objects]`

```javascript
/* start */
angular.module('app', ['oc.lazyLoad']);

/* debug */
$ocLazyLoadProvider.config({
  debug: true // 默认值是 false
});

/* events */
$ocLazyLoadProvider.config({
  events: true // 默认值是 false
});
$scope.$on('ocLazyLoad.moduleLoaded', function(e, module) {
  console.log('module loaded', module);
});

/* modules */
$ocLazyLoadProvider.config({
  modules: [{
    name: 'TestModule',
    files: ['js/TestModule.js']
  }]
});
$ocLazyLoad.load('TestModule'); // 加载预定义的配置
```

#### # 服务

文件加载服务

```javascript
/* 加载一个文件组件模块 */
$ocLazyLoad.load('testModule.js');

/* 加载多个文件组件模块 */
$ocLazyLoad.load(['testModule.js', 'testModuleCtrl.js', 'testModuleService.js']);

/* 加载多个文件组件模块，但不限于js */
$ocLazyLoad.load([
  'testModule.js',
  {type: 'css', path: 'testModuleCtrl'},
  {type: 'html', path: 'testModuleCtrl.html'},
  {type: 'js', path: 'testModuleCtrl'},
  'js!testModuleService',
  'less!testModuleLessFile'
]);

/* 你也可以这样加载一些css或者模板文件 */
$ocLazyLoad.load([
  'node_modules/bootstrap/dist/js/bootstrap.js',
  'node_modules/bootstrap/dist/css/bootstrap.css',
  'template/testTemplate.html'
]);
```

#### # 指令

指令的使用非常类似于服务，直接在html上使用：

```html
<div oc-lazy-load="['js/testModule.js', 'html/template.html']">
  <!-- test directive -->
</div>
```

或者可以储存在变量中使用：

```javascript
$scope.lazyLoadModule = [
  'js/testModule.js',
  'html/template.html'
];
```

```html
<div oc-lazy-load="lazyLoadModule"></div>
```