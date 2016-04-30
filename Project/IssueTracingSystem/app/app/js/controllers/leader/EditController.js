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
                if(userService.isLead()) {
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
                    if (!data.AssigneeId) {
                        data.AssigneeId = oldData.Assignee.Id;
                    }
                    if (!data.PriorityId) {
                        data.PriorityId = oldData.Priority.Id;
                    }
                    if (!data.DueDate) {
                        data.DueDate = oldData.DueDate;
                    }

                    issueService.editIssuesById(data, oldData.Id).then(function (success) {
                        notifyService.showSuccess('You update Issue successfully')
                    }, function (error) {
                        notifyService.showError('The Issue', error.data)
                    });
                }else{
                    notifyService.showError('You not a lead of project!')
                }
            };
            //TODO fixed button status and issueProjectEdit
            $scope.openButton = function (id, status) {
                if (status == 'In Progress') {
                    //TODO: put status Id
                } else {
                    var authenticationAdmin = userService.isAdminUser();
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
                    var authenticationAdmin = userService.isAdminUser();
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
