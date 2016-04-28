"use strict";

app.controller('AddController',
    ['$scope', '$location', '$route', 'notifyService', 'userService', 'issueService', 'projectService',
        function ($scope, $location, $route, notifyService, userService, issueService, projectService) {
            $scope.addIssue = function (issue) {
                var data = {
                    Title: issue.Title,
                    Description: issue.Description,
                    DueDate: issue.DueDate,
                    ProjectId: parseInt(issue.ProjectId),
                    AssigneeId: issue.AssigneeId,
                    PriorityId: parseInt(issue.PriorityId),
                    Labels: []
                };
                console.log(data);
                issueService.addIssue(data).then(function(success){
                    console.log(success);
                    notifyService.showSuccess('You add successfully issue:' + success.data.Title);
                    $location.path('/projects')
                }, function (error) {
                    console.log(error.data.Message);
                });
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