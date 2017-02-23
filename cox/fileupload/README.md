### 文件上传

#### # 依赖

使用前的依赖 *

```html
<script src="*url/ng-file-upload-all.min.js"></script>
```

```javascript
var app = angular.module('app', ['ngFileUpload']);
```

#### # 使用

单文件上传，多文件上传，拖动文件上传...

```html
<form ng-controller="uploadCtr" name="form">
  <div ngf-select ng-model="file" name="file" ngf-pattern="'image/*'"
  ngf-accept="'image/*'" ngf-max-size="20MB" ngf-min-height="100">单文件上传</div>
  <div ngf-select ng-model="files" ngf-multiple="true">多文件上传</div>
  <div ngf-drop ng-model="files" class="drop-box">拖动文件上传</div>
  <button type="submit" ng-click="submit()">提交</button>
</form>
```

```javascript
app.controller('uploadCtr', ['$scope', 'Upload', function($scope, Upload){
  var upload;
  $scope.submit = function() {
    if ($scope.form.file.$valid && $scope.file){
      $scope.upload($scope.file);
      upload.abort(); // 取消文件上传
    }
  };
  $scope.upload = function(file){
    upload = Upload.upload({
      url: 'upload/url',
      data: {file: file}
    }).then(function(resp){
      console.log(resp.data.file.name + '已经上传成功 响应内容: ' + resp.data);
    }, function(resp){
      console.log('上传错误状态码: ' + resp.status);
    }, function(evt){
      var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
      console.log('上传进度: ' + progressPercentage + '% ' + evt.data.file.name);
    });
  };
}]);
```