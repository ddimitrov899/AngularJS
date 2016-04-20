'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('issueTrackingSystemApp', ['ngRoute']);

app.constant('baseServiceUrl', 'http://softuni-issue-tracker.azurewebsites.net/');
app.constant('pageSize', 5);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.when('/profile/password', {
        templateUrl: 'templates/user/change-password.html',
        controller: 'ProfilePasswordController'
    });

    $routeProvider.otherwise({redirectTo: '/'});
}]);
