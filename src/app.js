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
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$ocLazyLoadProvider', '$httpProvider', '$compileProvider', 'statics', function($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider, $httpProvider, $compileProvider, statics){
    $urlRouterProvider.otherwise('/main/index');
    $urlRouterProvider.when('/main', '/main/index');
    $urlRouterProvider.when('/main/frame', '/main/frame/start');
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
            name: 'app',
            files: [
              statics.path + 'components/header/header.js',
              statics.path + 'components/footer/footer.js'
            ]
          });
        }]
      }
    })
    .state('main.index', stateConf('index', 'pages/index/index.html', 'pages/index/index.js'))
    .state('main.frame', stateConf('frame', 'pages/frame/frame.html', 'pages/frame/frame.js'))
    .state('main.frame.start', stateConf('start', 'pages/start/start.html', 'pages/start/start.js'))
    .state('main.frame.config', stateConf('config', 'pages/config/config.html', 'pages/config/config.js'))
    ;
    /* state config:start */
    function stateConf(route, htmlfile, jsfiles){
      return {
        url: '/' + route,
        templateUrl: statics.path + htmlfile,
        resolve: {
          loadMyFile: ['$ocLazyLoad', function($ocLazyLoad){
            return $ocLazyLoad.load({
              name: 'app',
              files: (typeof jsfiles === 'string' ? [statics.path + jsfiles] : jsfiles)
            });
          }]
        }
      };
    };
    /* state config:end */
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