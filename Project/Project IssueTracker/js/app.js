"use strict";

//noinspection JSUnresolvedFunction
var app = angular.module('issueTracerApp', ['ngRoute', 'ngResource', 'LocalStorageModule', 'angularUtils.directives.dirPagination']);

app.constant('BASE_URL', 'http://softuni-issue-tracker.azurewebsites.net/');

app.config(['$routeProvider', 'localStorageServiceProvider',
    function ($routeProvider, localStorageServiceProvider) {
    $routeProvider.when('/', {
        templateUrl: 'template/home-page.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'template/login.html',
        controller: 'LoginController'
    });


    $routeProvider.when('/register', {
        templateUrl: 'template/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.when('/change/password', {
        templateUrl: 'template/user/profile-password.html',
        controller: 'ChangePasswordController',
        //resolve: {
        //    user: function (authentication) {
        //        return authentication.isLogin();
        //    }
        //}
    });

    $routeProvider.when('/logout', {
        templateUrl: 'template/home-page.html',
        controller: 'LogoutController'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });

     localStorageServiceProvider.setStorageType('localStorage');
     localStorageServiceProvider.setPrefix('issueTrackerApp');
}]);

