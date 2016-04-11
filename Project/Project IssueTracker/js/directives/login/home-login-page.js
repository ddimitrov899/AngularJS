"use strict";

app.directive('homeLoginPageDirective', function () {
    return {
        controller: 'UserIssueBoardController',
        restrict: 'A',
        templateUrl: 'template/home-directives/home-login-page.html',
        replace: true
    }
});