(function(){
  'use strict';

  angular.module('config', [])
  .constant('statics', {
    path: 'dist/'
  })
  .constant('routes', {
    index: ['pages/index.html', 'pages/index.js'],
    frame: ['pages/frame.html', 'pages/frame.js'],
    start: ['pages/start.html', 'pages/start.js'],
    config: ['pages/config.html', 'pages/config.js'],
    run: ['pages/run.html', 'pages/run.js'],
    controller: ['pages/controller.html', 'pages/controller.js'],
    component: ['pages/component.html', 'pages/component.js'],
    form: ['pages/form.html', 'pages/form.js'],
    validate: ['pages/validate.html', 'pages/validate.js'],
    event: ['pages/event.html', 'pages/event.js'],
    command: ['pages/command.html', 'pages/command.js'],
    globalapi: ['pages/globalapi.html', 'pages/globalapi.js'],
    plugin: ['pages/plugin.html', 'pages/plugin.js'],
    lazyload: ['pages/lazyload.html', 'pages/lazyload.js'],
    fileupload: ['pages/fileupload.html', 'pages/fileupload.js'],
    dialog: ['pages/dialog.html', 'pages/dialog.js'],
    toastr: ['pages/toastr.html', 'pages/toastr.js'],
    storage: ['pages/storage.html', 'pages/storage.js']
  });
})();