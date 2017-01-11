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
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$ocLazyLoadProvider', '$httpProvider', '$compileProvider', 'routes', function($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider, $httpProvider, $compileProvider, routes){
    console.log(routes);
    $urlRouterProvider.otherwise('/main/index');
    $stateProvider.state('main', {
      url: '/main',
      views: {
        '': {
          templateUrl: 'pages/main/main.html'
        },
        '@header': {
          templateUrl: 'components/header/header.html'
        },
        '@footer': {
          templateUrl: 'components/footer/footer.html'
        }
      },
      resolve: {
        loadMyFile: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load({
            name: 'app',
            files: [
              'components/header/header.js',
              'components/footer/footer.js'
            ]
          });
        }]
      }
    });
    /* jshint ignore:start */
    for (var route in routes){
      $stateProvider.state('main.' + route, {
        url: routes[route].url || ('/' + route),
        templateUrl: routes[route].templateUrl || ('pages/' + route + '/' + route + '.html'),
        resolve: {
          loadMyFile: ['$ocLazyLoad', function($ocLazyLoad){
            return $ocLazyLoad.load({
              name: 'app',
              files: routes[route].files || ['pages/' + route + '/' + route + '.js']
            });
          }]
        }
      });
      console.log(route, routes[route]);
    }
    /* jshint ignore:end */
  }])
  .run(['$rootScope', function($rootScope){
    console.log($rootScope);
  }]);
})();