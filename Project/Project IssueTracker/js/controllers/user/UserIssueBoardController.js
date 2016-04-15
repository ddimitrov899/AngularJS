"use strict";
app.controller('UserIssueBoardController', ['$scope', '$timeout', 'userIssueData', 'authenticationProject',
    function ($scope, $timeout, userIssueData, authenticationProject) {

        $scope.readyDownload = false;
        var result = [];
        authenticationProject.getNumberProjects().then(function (data) {
            var numberOfCollections = data.data.length;
            var id = 1;
            while (id !== numberOfCollections + 1) {
                userIssueData.getIssue(id).then(function (data) {
                    //TODO: not is the current data


                    result.push(data.data);
                });
                id++;
            }

        });
        $timeout(function () {
            $scope.pageTitle = 'Dashboard';
            $scope.readyDownload = true;
            $scope.issues = result;
        }, 5000);

        console.log(result);
    }]);