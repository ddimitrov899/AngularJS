"use strict";

app.directive('headerDashboardDirective', function () {
    return {
        controller: 'NavHeaderDirectiveController',
        restrict: 'A',
        templateUrl: 'template/home-directives/nav-headers/nav-dashboard-header.html',
        replace: true
    }
});