"use strict";

app.controller('EditController',
    ['$scope', '$location', '$route', 'notifyService', 'authentication', 'issueService',
        function ($scope, $location, $route, notifyService, authentication, issueService) {
            $scope.issueProjectEdit = function (editData, oldData) {

                var data = {};
                if (editData != undefined) {
                    data = editData;
                }
                if (!data.Title) {
                    data.Title = oldData.Title;
                }
                if (!data.Description) {
                    data.Description = oldData.Description;
                }
                if (!data.Assignee) {
                    data.Assignee = {};
                    data.Assignee.Username = oldData.Assignee.Username;
                }
                if (!data.Priority) {
                    data.Priority = {};
                    data.Priority.Name = oldData.Priority.Name;
                }
                if (!data.DueDate) {
                    data.DueDate = oldData.DueDate;
                }
                
                issueService.editIssuesById(data, oldData.Id);
            }
        }
    ]);
