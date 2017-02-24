### 会话窗口

#### # 依赖

使用前的依赖 *

```html
<link rel="stylesheet" href="*url/ngDialog.min.css">
<link rel="stylesheet" href="*url/ngDialog-theme-default.min.css">
<script src="*url/ngDialog.min.js"></script>
```

```javascript
var app = angular.module('app', ['ngDialog']);

app.config(['ngDialogProvider', function(ngDialogProvider){
  /* 默认的一些全局配置 */
  ngDialogProvider.setDefaults({
    className: 'ngdialog-theme-default',
    plain: false
  });
}]);
```

#### # 使用

一个简单示例使用

```html
<script type="text/ng-template" id="templateId">
  <h1>模板标题</h1>
  <p>内容，模板可以自定义</p>
</script>
```

```javascript
ngDialog.open({ template: 'templateId' });
```

##### plain {Boolean}

```javascript
ngDialog.open({
  template: '<p>你的内容</p>',
  plain: true // 设置plain为true，就可以像上面那样调用
});
```

##### controller {String} | {Array} | {Object}

```javascript
ngDialog.open({
  template: 'someTemplate.html',
  controller: 'SomeController'
});
```

##### controllerAs {String}

与 angular controller 别名一样

##### resolve {Object.<String, Function>}

```javascript
ngDialog.open({
  controller: function Ctrl(dep) { /* ... */ },
  resolve: {
    dep: function depFactory(){
        return 'dep value';
    }
  }
});
```

##### scope {Object}

```javascript
$scope.value = true;

ngDialog.open({
  template: 'someTemplate',
  className: 'ngdialog-theme-plain',
  scope: $scope
});
```

```html
<script type="text/ng-template" id="someTemplate">
  <p>输出 scope: <code>{{value}}</code></p>
</script>
```

##### scope.closeThisDialog(value)

```html
<script type="text/ng-template" id="someTemplate">
  <button ng-click="closeThisDialog()">关闭窗口</button>
</script>
```

##### className {String}

```javascript
ngDialog.open({
  template: 'someTemplate',
  className: 'your-ngdialog-theme-class' // 你的自定义主题
});
```

##### appendClassName {String}

```javascript
ngDialog.open({
  template: 'someTemplate',
  className: 'append-ngdialog-class' // 增加一些样式
});
```

##### width {Number | String}

```javascript
ngDialog.open({
  template: 'someTemplate',
  width: '500'
});
/* or */
ngDialog.open({
  template: 'someTemplate',
  width: '50%'
});
```

##### height {Number | String}

```javascript
ngDialog.open({
  template: 'someTemplate',
  height: '500'
});
/* or */
ngDialog.open({
  template: 'someTemplate',
  height: '50%'
});
```

#### # Returns

当你调用 `open()` 方法时，会返回一个对象和一些有用的信息

##### id {String}

会返回一个当前会话的 `id`

##### close(value) {Function}

会返回一个 `close` 的方法去让你在某个时候关闭窗口

##### closePromise {Promise}

会返回一个关闭会话窗口时的回调方法

```javascript
var dialog = ngDialog.open({
  template: 'someTemplate'
});

dialog.closePromise.then(function(data){
  console.log(data.id + ' 会话窗口被关闭了');
});
```