"use strict";

app.controller('DashboardController',
    ['$scope', '$timeout', 'userService', 'projectService', 'issueService',
        function ($scope, $timeout, userService, projectService, issueService) {
            $scope.readyDownload = false;
            var result;
            issueService.getMyIssues().then(function (data) {
                result = data.data.Issues;
            });

            $timeout(function () {
                $scope.issues = result;
                $scope.pageTitle = 'Dashboard';
                $scope.readyDownload = true;
                console.log(result);
            }, 5000)

        }]);
