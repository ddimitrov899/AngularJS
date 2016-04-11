"use strict";

app.directive('dashboardDirective', function () {
    return {
        controller: 'UserIssueBoardController',
        restrict: 'A',
        templateUrl: 'template/user/dashboard.html',
        replace: true
    }
});