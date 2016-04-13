"use strict";
app.controller('UserIssueBoardController', ['$scope', 'userIssueData', 'authenticationProject', function ($scope, userIssueData, authenticationProject) {
    $scope.pageTitle = 'Dashboard';
    var result = [];
    authenticationProject.getNumberProjects().then(function (data) {
        console.log(data);
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

    $scope.issues = result;
    console.log(result);
}]);