"use strict";

var app = angular.module('issueTracerApp', ['ngRoute']);

app.constant('BASE_URL', 'http://softuni-issue-tracker.azurewebsites.net/api/');

app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/',  {
        templateUrl: 'template/home-page.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login',  {
        templateUrl: 'template/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register',  {
        templateUrl: 'template/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.when('/dashboard',  {
        templateUrl: 'template/user/dashboard.html',
        controller: 'UserIssueBoardController'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]);

