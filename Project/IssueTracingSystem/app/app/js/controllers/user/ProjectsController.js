"use strict";

app.controller('ProjectsController', ['$scope', '$location', 'projectService', 'authentication', 'issueService', 'userService', 'notifyService',
    function ($scope, $location, projectService, authentication, issueService, userService, notifyService) {
        $scope.readyDownload = false;
        $scope.readyListProject = false;
        $scope.projects = [];
        $scope.authService = userService;
        var result = [];
        var isLogged = authentication.getUser();
        if (!isLogged) {
            notifyService.showError('Please login first.');
            $location.path('/');
        }

        if (userService.isAdminUser() && !userService.isLead()) {
            projectService.getAllProject().then(function (data) {
                $scope.projects = data.data;
            });
        } else {

            userService.userInfo().then(function (success) {
                projectService.getProjectByLeadId(success.data.Id).then(function (success) {
                    $scope.projects = success.data.Projects;

                })
            });
        }


        $scope.readyListProject = true;
        $scope.selectedName = function (name) {
            if (name != undefined) {
                $scope.nameProject = name;

                $scope.readyDownload = true;
                if (result.length <= 0) {
                    issueService.getAllIssues().then(function (success) {
                        $scope.issues = success.data.Issues;
                    }, function (error) {
                        notifyService.showError('', error.data);
                    });

                }
            }
        };

        $scope.addButton = function (id) {
            $location.path('/projects/' + id + '/add-issue');
        }

    }]);


