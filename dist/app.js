!function(){"use strict";angular.module("config",[]).constant("statics",{path:"dist/"})}();
!function(){"use strict";"v1.0.0";angular.module("app",["ui.router","oc.lazyLoad","ngFileUpload","ngDialog","toastr","config"]).config(["$stateProvider","$urlRouterProvider","$locationProvider","$ocLazyLoadProvider","$httpProvider","$compileProvider","statics",function(e,a,t,o,r,n,i){function s(e,a,t){return{url:"/"+e,templateUrl:i.path+a,resolve:{loadMyFile:["$ocLazyLoad",function(e){return e.load({name:"app",files:"string"==typeof t?[i.path+t]:t})}]}}}a.otherwise("/main/index"),a.when("/main","/main/index"),a.when("/main/frame","/main/frame/start"),e.state("main",{url:"/main",views:{"":{templateUrl:i.path+"pages/main/main-58f1c820d4.html"},"@header":{templateUrl:i.path+"components/header/header-f423204035.html"},"@footer":{templateUrl:i.path+"components/footer/footer-66e52d8066.html"}},resolve:{loadMyFile:["$ocLazyLoad",function(e){return e.load({name:"app",files:[i.path+"components/header/header-2dc1832573.js",i.path+"components/footer/footer-3e5e4620a1.js"]})}]}}).state("main.index",s("index","pages/index/index-0bedbe9d9d.html","pages/index/index-0e575bd2b0.js")).state("main.frame",s("frame","pages/frame/frame-4dbb0438cd.html","pages/frame/frame-1f473127cc.js")).state("main.frame.start",s("start","pages/start/start-dee75b80f8.html","pages/start/start-d41d8cd98f.js")).state("main.frame.config",s("config","pages/config/config-d41d8cd98f.html","pages/config/config-d41d8cd98f.js"))}]).run(["$rootScope",function(e){function a(){console.log.apply(console,arguments)}a("%c Angular 1.x and gulp web spa starter.","color:red;"),a("%c 2017 @Hexson","color:red;")}])}();
!function(){"use strict"}();
!function(){"use strict"}();