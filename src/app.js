(function(){
  'use strict';

  angular.module('app', [
    'ui.router',
    'oc.lazyLoad',
    'ngFileUpload',
    'ngDialog',
    'toastr',
    'config'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$ocLazyLoadProvider', '$httpProvider', '$compileProvider', 'routes', 'statics', function($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider, $httpProvider, $compileProvider, routes, statics){
    // console.log(routes);
    $urlRouterProvider.otherwise('/main/index');
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
    });
    /* jshint ignore:start */
    for (var route in routes){
      $stateProvider.state('main.' + route, {
        url: routes[route].url || ('/' + route),
        templateUrl: routes[route].templateUrl || (statics.path + 'pages/' + route + '/' + route + '.html'),
        resolve: {
          loadMyFile: ['$ocLazyLoad', function($ocLazyLoad){
            return $ocLazyLoad.load({
              name: 'app',
              files: routes[route].files || [statics.path + 'pages/' + route + '/' + route + '.js']
            });
          }]
        }
      });
      // console.log(route, routes[route]);
    }
    /* jshint ignore:end */
  }])
  .run(['$rootScope', function($rootScope){
    function log(){
      console.log.apply(console, arguments);
    }
    /* log start */
    // log('  **    **  ********  **        **          ****    *        *    ****    ******    **        ******');
    // log('  **    **  **        **        **        **    **  **      **  **    **  **    **  **        **    **');
    // log('  ********  ********  **        **        **    **  **  **  **  **    **  ********  **        **    **');
    // log('  **    **  **        **        **        **    **  **********  **    **  **  **    **        **    **');
    // log('  **    **  ********  ********  ********    ****     **    **     ****    **    **  ********  ******');
    /* log end */
    log('%c Angular 1.x and gulp web spa starter.', 'color:red;');
    log('%c 2017 @Hexson', 'color:red;');
  }]);
})();