"use strict";

var app = angular.module('issueTracerApp', ['ngRoute']);

app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/',  {
        templateUrl: 'template/home-page.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login',  {
        templateUrl: 'template/login.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/register',  {
        templateUrl: 'template/register.html',
        controller: 'HomeController'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]);