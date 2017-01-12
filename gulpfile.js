var gulp = require('gulp');
var del = require('del');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var reload = browserSync.reload;


var isDev = function(){
  return process.env.NODE_ENV.trim() === 'development';
}();

var isProd = function(){
  return process.env.NODE_ENV.trim() === 'production';
}();


gulp.task('clean', function(cb){
  var stream = del(['dist/**/*'], cb);
  return stream;
});

gulp.task('copy:html', function(){
  gulp.src('src/**/*.{html,htm}')
      .pipe(gulp.dest('dist/'));
});

gulp.task('copy:lib', function(){
  gulp.src('node_modules/angular/angular.min.js')
      .pipe(gulp.dest('dist/js/angular/'));
  gulp.src('node_modules/angular-toastr/dist/*.{js,css}')
      .pipe(gulp.dest('dist/js/angular-toastr/'));
  gulp.src('node_modules/angular-ui-router/release/angular-ui-router.min.js')
      .pipe(gulp.dest('dist/js/angular-ui-router/'));
  gulp.src('node_modules/ng-dialog/js/ngDialog.min.js')
      .pipe(gulp.dest('dist/js/ng-dialog/'));
  gulp.src('node_modules/ng-dialog/css/**/*.css')
      .pipe(gulp.dest('dist/js/ng-dialog/'));
  gulp.src('node_modules/ng-file-upload/dist/*.*')
      .pipe(gulp.dest('dist/js/ng-file-upload/'));
  gulp.src('node_modules/ngstorage/ngStorage.min.js')
      .pipe(gulp.dest('dist/js/ngstorage/'));
  gulp.src('node_modules/oclazyload/dist/ocLazyLoad.min.js')
      .pipe(gulp.dest('dist/js/oclazyload/'));
});

gulp.task('imagemin', function(){
  gulp.src('src/img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/img/'));
});

gulp.task('less', function(){
  gulp.src('src/less/*')
      .pipe(less())
      .pipe(gulp.dest('dist/css/'))
      .pipe(reload({stream: true}));
});

gulp.task('less:uglifycss', function(){
  gulp.src('src/less/*')
      .pipe(less())
      .pipe(uglifycss())
      .pipe(gulp.dest('dist/css/'));
});

gulp.task('concat:appjs', function(){
  gulp.src(['src/app.config.js', 'src/app.js', 'src/app.filter.js', 'src/app.services.js'])
      .pipe(concat('app.js'))
      .pipe(gulp.dest('dist/'));
});

gulp.task('uglify:concat:appjs', function(){
  gulp.src(['src/app.config.js', 'src/app.js', 'src/app.filter.js', 'src/app.services.js'])
      .pipe(uglify())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('dist/'));
});

gulp.task('copy:pagejs', function(){
  gulp.src(['src/**/*.js', '!src/*.js'])
      .pipe(gulp.dest('dist/'));
});

gulp.task('uglify:pagejs', function(){
  gulp.src(['src/**/*.js', '!src/*.js'])
      .pipe(uglify())
      .pipe(gulp.dest('dist/'));
});

gulp.task('server', ['less'], function(){
  browserSync({
    server: {
      baseDir: 'dist'
    },
    port: 8000
  });
  gulp.watch("app/less/*.less", ['less']);
  gulp.watch(['src/**/*', '!src/less/*.less']).on('change', reload);
});

gulp.task('watch', function(){
  gulp.watch('src/**/*.{html,htm}', ['copy:html']);
  gulp.watch('src/img/*', ['imagemin']);
  gulp.watch('src/less/*', ['less']);
  gulp.watch(['src/app.config.js', 'src/app.js', 'src/app.filter.js', 'src/app.services.js'], ['concat:appjs']);
  gulp.watch(['src/**/*.js', '!src/*.js'], ['copy:pagejs']);
});

var taskList = ['copy:lib', 'copy:html', 'imagemin'];

if (isProd){
  taskList.push('less:uglifycss', 'uglify:concat:appjs', 'uglify:pagejs');
}else {
  taskList.push('less', 'concat:appjs', 'copy:pagejs', 'server', 'watch');
}


gulp.task('default', taskList);