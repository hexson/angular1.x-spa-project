(function(){
  'use strict';

  angular.module('config', [])
  .constant('statics', {
    path: 'dist/'
  })
  .constant('routes', {
    index: ['pages/index/index.html', 'pages/index/index.js'],
    frame: ['pages/frame/frame.html', 'pages/frame/frame.js'],
    start: ['pages/start/start.html', 'pages/start/start.js'],
    config: ['pages/config/config.html', 'pages/config/config.js'],
    run: ['pages/run/run.html', 'pages/run/run.js'],
    component: ['pages/component/component.html', 'pages/component/component.js'],
    controller: ['pages/controller/controller.html', 'pages/controller/controller.js'],
    form: ['pages/form/form.html', 'pages/form/form.js'],
    validate: ['pages/validate/validate.html', 'pages/validate/validate.js'],
    event: ['pages/event/event.html', 'pages/event/event.js'],
    command: ['pages/command/command.html', 'pages/command/command.js'],
    globalapi: ['pages/globalapi/globalapi.html', 'pages/globalapi/globalapi.js'],
    plugin: ['pages/plugin/plugin.html', 'pages/plugin/plugin.js'],
    lazyload: ['pages/lazyload/lazyload.html', 'pages/lazyload/lazyload.js'],
    fileupload: ['pages/fileupload/fileupload.html', 'pages/fileupload/fileupload.js'],
    dialog: ['pages/dialog/dialog.html', 'pages/dialog/dialog.js'],
    toastr: ['pages/toastr/toastr.html', 'pages/toastr/toastr.js']
  });
})();