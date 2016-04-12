"use strict";

app.directive('navigationLoginDirective', function () {
    return {
        controller: 'HomeController',
        restrict: 'A',
        templateUrl: 'template/home-directives/nav-headers/nav-login-header.html',
        replace: true
    }
});