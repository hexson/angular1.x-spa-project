(function(){
  'use strict';
  '__VERSION__';

  angular.module('app', [
    'ui.router',
    'oc.lazyLoad',
    'ngFileUpload',
    'ngDialog',
    'toastr',
    'config'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$ocLazyLoadProvider', '$httpProvider', '$compileProvider', 'statics', 'routes', function($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider, $httpProvider, $compileProvider, statics, routes){
    // $ocLazyLoadProvider.config({
    //   debug: true
    // });
    $urlRouterProvider.otherwise('/main/index');
    $urlRouterProvider.when('/main', '/main/index');
    $urlRouterProvider.when('/main/frame', '/main/frame/start');
    $urlRouterProvider.when('/main/plugin', '/main/plugin/lazyload');
    $locationProvider.hashPrefix('');
    $stateProvider.state('main', {
      url: '/main',
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
        loadMyFile: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load({
            files: [
              statics.path + 'components/header/header.js',
              statics.path + 'components/footer/footer.js'
            ]
          });
        }]
      }
    })
    .state('main.index', stateConf('index'))
    .state('main.frame', stateConf('frame'))
    .state('main.frame.start', stateConf('start'))
    .state('main.frame.config', stateConf('config'))
    .state('main.frame.run', stateConf('run'))
    .state('main.frame.component', stateConf('component'))
    .state('main.frame.controller', stateConf('controller'))
    .state('main.frame.form', stateConf('form'))
    .state('main.frame.validate', stateConf('validate'))
    .state('main.frame.event', stateConf('event'))
    .state('main.frame.command', stateConf('command'))
    .state('main.frame.globalapi', stateConf('globalapi'))
    .state('main.plugin', stateConf('plugin'))
    .state('main.plugin.lazyload', stateConf('lazyload'))
    .state('main.plugin.fileupload', stateConf('fileupload'))
    .state('main.plugin.dialog', stateConf('dialog'))
    .state('main.plugin.toastr', stateConf('toastr'))
    ;
    /* state config:start */
    function stateConf(route, htmlfile, jsfiles){
      if (routes[route]){
        if (routes[route] instanceof Array && routes[route].length === 2){
          htmlfile = htmlfile || routes[route][0];
          jsfiles = jsfiles || routes[route][1];
        }else {
          throw new Error('The ' + route + '\'s route template config error! It must be an Array and length === 2.');
        }
      }else {
        throw new Error('The ' + route + ' route not template config!');
      }
      return {
        url: '/' + route,
        templateUrl: statics.path + htmlfile,
        resolve: {
          loadMyFile: ['$ocLazyLoad', function($ocLazyLoad){
            return $ocLazyLoad.load({
              files: (typeof jsfiles === 'string' ? [statics.path + jsfiles] : (jsfiles || []))
            });
          }]
        }
      };
    };
    /* state config:end */
    $httpProvider.interceptors.push(['$rootScope', function($rootScope){
      return {
        request: function(req){
          var md = req.url.match(/[a-zA-Z0-9]+\.html/)[0].replace('.html', '');
          if (md !== 'frame' && md !== 'plugin' && routes[md]) $rootScope.openTransition = md;
          $rootScope.footerIsShow = false;
          return req;
        },
        response: function(res){
          $rootScope.footerIsShow = !!$rootScope.openTransition;
          return res;
        }
      }
    }]);
  }])
  .run(['$rootScope', function($rootScope){
    function log(){
      console.log.apply(console, arguments);
    }
    /* print hello world:start */
    // log('  **    **  ********  **        **          ****    *        *    ****    ******    **        ******');
    // log('  **    **  **        **        **        **    **  **      **  **    **  **    **  **        **    **');
    // log('  ********  ********  **        **        **    **  **  **  **  **    **  ********  **        **    **');
    // log('  **    **  **        **        **        **    **  **********  **    **  **  **    **        **    **');
    // log('  **    **  ********  ********  ********    ****     **    **     ****    **    **  ********  ******');
    /* print hello world:end */
    log('%c Angular 1.x and gulp web spa starter.', 'color:red;');
    log('%c 2017 @Hexson', 'color:red;');
  }]);
})();