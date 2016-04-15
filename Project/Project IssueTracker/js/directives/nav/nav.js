"use strict";

app.directive('navDirective', function () {
    return {
        controller: 'NavHeaderDirectiveController',
        restrict: 'A',
        templateUrl: 'template/home-directives/nav-headers/nav.html',
        replace: true
    }
});