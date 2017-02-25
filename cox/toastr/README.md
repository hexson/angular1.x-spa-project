### 消息通知

#### # 依赖

使用前的依赖 *

```html
<link rel="stylesheet" type="text/css" href="*url/angular-toastr.min.css" />
<script type="text/javascript" src="*url/angular-toastr.tpls.min.js"></script>
```

```javascript
var app = angular.module('app', ['toastr']);

/* 如果你想要动画效果，请添加 angular-animate */
var app = angular.module('app', ['ngAnimate', 'toastr']);
```

#### # 配置

一些公用或者全局的配置

```javascript
app.config(['toastrConfig', function(toastrConfig){
  angular.extend(toastrConfig, {
    closeButton: true, // 是否显示关闭按钮
    closeHtml: '<button>&times;</button>', // 自定义关闭按钮
    iconClasses: {
      success: 'toast-success',
      info: 'toast-info',
      error: 'toast-error',
      warning: 'toast-warning'
    }, // 自定义提示类型的样式类
    progressBar: true, // 是否显示关闭倒计时的进度条
    timeOut: 2000, // 设置多久消失，单位ms
    titleClass: 'toast-title', // 提示标题的样式类
    toastClass: 'toast' // 提示主体的样式类
  });
}]);
```

#### # 使用

某个成功的消息通知(绿色)

```javascript
app.controller('someCtr', ['toastr', function(toastr){
  toastr.success('提示消息', '提示标题!');
}]);
```

某个普通的消息通知(蓝色)

```javascript
app.controller('someCtr', ['toastr', function(toastr){
  toastr.info('提示消息', '提示标题!');
}]);
```

某个错误的消息通知(红色)

```javascript
app.controller('someCtr', ['toastr', function(toastr){
  toastr.error('提示消息', '提示标题!');
}]);
```

某个警告的消息通知(黄色)

```javascript
app.controller('someCtr', ['toastr', function(toastr){
  toastr.warning('提示消息', '提示标题!');
}]);
```

> 不想显示提示标题的时候只要不传该参数就可以了