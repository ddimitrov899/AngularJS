"use strict";

app.directive('navigationLoginDirective', function () {
    return {
        controller: 'NavHeaderDirectiveController',
        restrict: 'A',
        templateUrl: 'template/home-directives/nav-headers/nav-login-header.html',
        replace: true
    }
});