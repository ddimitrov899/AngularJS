"use strict";

app.directive('pathDirective', function () {
    return {
        controller: 'NavHeaderDirectiveController',
        restrict: 'A',
        templateUrl: 'template/home-directives/path.html',
        replace: true
    }
});