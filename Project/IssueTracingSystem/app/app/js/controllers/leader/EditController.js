"use strict";

app.controller('EditController',
    ['$scope', '$location', 'authentication', 'userService', 'issueService', 'notifyService',
        function ($scope, $location, authentication, userService, issueService, notifyService) {
            var isLogged = authentication.getUser();
            if (!isLogged) {
                notifyService.showError('Please login first.');
                $location.path('/');
            }
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

                issueService.editIssuesById(data, oldData.Id).then(function (success) {
                    notifyService.showSuccess('You update Issue successfully')
                }, function (error) {
                    notifyService.showError('The Issue', error.data)
                });
            };
            //TODO fixed button status and issueProjectEdit
            $scope.openButton = function (id, status) {
                if (status == 'In Progress') {
                    //TODO: put status Id
                } else {
                    var authenticationAdmin = userService.isAdmin();
                    var authenticationLead = userService.isLead();
                    if (authenticationAdmin && authenticationLead) {
                        var errorMsg = 'This status cannot be change!';
                        var infoMsg = 'Please if you wont open issue please click reopen button!';
                        notifyService.showError(errorMsg + "<br>" + infoMsg)
                    } else {
                        var errorMsg = 'This status cannot be change!';
                        var infoMsg = 'Please connect your teem leader!';
                        notifyService.showError(errorMsg + "<br >" + infoMsg)
                    }
                }
            };

            $scope.inProgressButton = function (id, status) {
                if (status == 'In Progress') {
                    //TODO: put status Id
                } else {
                    var authenticationAdmin = userService.isAdmin();
                    var authenticationLead = userService.isLead();
                    if (authenticationAdmin && authenticationLead) {
                        var errorMsg = 'This status cannot be change!';
                        var infoMsg = 'This option accept only Resolved and Closed';
                        notifyService.showError(errorMsg + "<br>" + infoMsg)
                    } else {
                        var errorMsg = 'This status cannot be change!';
                        var infoMsg = 'Please connect your teem leader!';
                        notifyService.showError(errorMsg + "<br>" + infoMsg)
                    }
                }
            };
        }
    ]);
