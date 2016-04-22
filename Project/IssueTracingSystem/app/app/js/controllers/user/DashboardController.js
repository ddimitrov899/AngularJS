"use strict";

app.controller('DashboardController',
    ['$scope', '$timeout', 'userService', 'projectService', 'issueService',
        function ($scope, $timeout, userService, projectService, issueService) {
            $scope.readyDownload = false;
            var result = [];
            var numberOfProject;
            $scope.service = userService;
            projectService.getAllProject().then(function (data) {
                numberOfProject = data.data.length;
                var id = 1;
                while (id !== numberOfProject + 1) {
                    issueService.getIssuesById(id).then(function (data) {
                        result.push(data.data);
                    });
                    id++;
                }
            });

            $timeout(function () {
                $scope.issues = result;
                $scope.pageTitle = 'Dashboard';
                $scope.readyDownload = true;
                console.log(result);
            }, 5000)

        }]);
