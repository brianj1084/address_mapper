/// <referene path="./_app.ts" />

module app {
    'use strict';
    
    export class AppConfig {
        get googleApiKey(): string {
            return "AIzaSyAJhnlSOIxhP0ta5NjCb2IylLE4e8T2kYM";
        }
        
        constructor() {

        }
    }

    var app = angular.module('app', ['ui.router', 'ui.bootstrap']);
    
    app.value('config', new AppConfig());

    app.config(($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
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

    app.controller('AppController', controllers.AppController);
    app.controller('HomeController', controllers.HomeController);
}