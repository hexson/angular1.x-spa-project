### 指令

#### # 内置的指令

通过被称为指令的新属性来扩展HTML

```html
<div ng-app="myApp"> <!-- 初始化一个应用程序 -->
  <div ng-init="myName = 'Hexson'"> <!-- 初始化应用程序数据 -->
    My name <input type="text" ng-model="myName" /> <!-- 将元素值绑定到应用程序 -->
  </div>
</div>
```

```html
ng-bind ------------------------ 绑定数据到元素上，双大括号的另一种形式
ng-class ----------------------- class绑定，可以做一些动态的判定
ng-controller ------------------ controller的初始化声明
ng-hide ------------------------ 元素是否隐藏
ng-href ------------------------ href赋值
ng-if -------------------------- if判定，为真时存在，否则则不存在
ng-repeat ---------------------- 数据each遍历
ng-show ------------------------ 元素是否显示
ng-src ------------------------- src赋值
ng-style ----------------------- style赋值
ng-value ----------------------- value赋值
ng-class-even ------------------ 元素为偶数时的class
ng-class-odd ------------------- 元素为奇数时的class
<!-- 这里只列举了常用的指令，其他指令请查询Angular文档 -->
```

#### # 自定义的指令

创建自定义指令，方法见 [组件](/#/main/frame/component)，设置 `restrict: A`。