"use strict";

app.controller('AddController',
    ['$scope', '$location', '$route', 'notifyService', 'userService', 'issueService', 'projectService',
        function ($scope, $location, $route, notifyService, userService, issueService, projectService) {
            $scope.addIssue = function (issue) {
                console.log(issue)
            };

            var numberOfProject;
            projectService.getAllProject().then(function (data) {
                numberOfProject = data.data.length;
                var id = 1;
                while (id !== numberOfProject + 1) {
                    issueService.getIssuesById(id).then(function (data) {
                        projectData.push(data.data.Project);

                    });
                    id++;
                }
                $scope.projectsData = projectData;

            });
            userService.getAllUsers().then(function (users) {
                $scope.usersName = users.data;

            })


        }
    ]);
var projectData = [];
var usersData = [];