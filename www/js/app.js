/// <reference path="./_app.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        'use strict';
        var AppController = (function () {
            function AppController() {
            }
            return AppController;
        })();
        controllers.AppController = AppController;
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
/// <reference path="../_app.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        'use strict';
        var HomeController = (function () {
            function HomeController($http, $log, config) {
                this.$http = $http;
                this.$log = $log;
                this.config = config;
                var ctrl = this;
            }
            HomeController.prototype.showMap = function () {
                var ctrl = this;
                var fullAddress = ctrl.address + ", " + ctrl.city + ", " + ctrl.state + " " + ctrl.zipCode;
                var geoCodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(fullAddress) + '&key=' + ctrl.config.googleApiKey;
                ctrl.$http.get(geoCodeUrl).then(function (response) {
                    var lat = response.data.results[0].geometry.location.lat;
                    var lng = response.data.results[0].geometry.location.lng;
                    ctrl.mapUrl = 'https://maps.googleapis.com/maps/api/staticmap?center=' + lat + ',' + lng + '&size=600x300&maptype=roadmap&markers=' + encodeURIComponent('color:red|' + lat + ',' + lng) + '&key=' + ctrl.config.googleApiKey;
                });
            };
            return HomeController;
        })();
        controllers.HomeController = HomeController;
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
/// <referene path="./_app.ts" />
var app;
(function (app_1) {
    'use strict';
    var AppConfig = (function () {
        function AppConfig() {
        }
        Object.defineProperty(AppConfig.prototype, "googleApiKey", {
            get: function () {
                return "AIzaSyAJhnlSOIxhP0ta5NjCb2IylLE4e8T2kYM";
            },
            enumerable: true,
            configurable: true
        });
        return AppConfig;
    })();
    app_1.AppConfig = AppConfig;
    var app = angular.module('app', ['ui.router', 'ui.bootstrap']);
    app.value('config', new AppConfig());
    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('app', {
            url: '',
            abstract: true,
            templateUrl: 'app/app.html',
            controller: 'AppController',
            controllerAs: 'ctrl'
        });
        $stateProvider.state('app.home', {
            url: '/home',
            views: {
                'content': {
                    templateUrl: 'app/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'ctrl'
                }
            }
        });
        $urlRouterProvider.otherwise('/home');
    });
    app.controller('AppController', app_1.controllers.AppController);
    app.controller('HomeController', app_1.controllers.HomeController);
})(app || (app = {}));
/// Type Definitions
/// <reference path="./typings/tsd.d.ts" />
/// <reference path="./app-controller.ts" />
/// <reference path="./home/home-controller.ts" />
/// <reference path="./app.ts" /> 
//# sourceMappingURL=app.js.map