### 数据储存

#### # 依赖

使用前的依赖 *

```html
<script type="text/javascript" src="*url/ngStorage.min.js"></script>
```

```javascript
var app = angular.module('app', ['ngStorage']);
```

#### # 持久储存及会话储存

持久储存及会话储存的使用

```javascript
app.controller('someCtr', [
  '$scope',
  '$localStorage',
  '$sessionStorage',
  function($scope, $localStorage, $sessionStorage){
    $scope.$storage = $localStorage;

    /* Write localStorage (or $sessionStorage) */
    $storage.counter = 1;
    // or
    $scope.$storage = $localStorage.$default({
      counter: 1
    });

    /* Read localStorage (or $sessionStorage) */
    console.log($storage.counter);

    /* Delete localStorage (or $sessionStorage) */
    delete $scope.$storage.counter;
    // or
    delete $localStorage.counter;

    /* Delete all localStorage (or $sessionStorage) */
    $localStorage.$reset();
    // or reset counter
    $localStorage.$reset({
      counter: 0
    });
  }
]);
```

> `$sessionStorage` 与 `$localStorage` 使用一致