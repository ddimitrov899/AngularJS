"use strict";
app.controller('AdminController', ['$scope', '$timeout', 'issueService',
    function ($scope, $timeout, issueService) {
        $scope.authService = issueService;
        $scope.readyDownload = false;
        var totalCount;
        var result = [];
        issueService.getAllIssuesById().then(function (data) {

            var id = 1;
            totalCount = data.data.TotalCount;
            while (id !== totalCount + 1){

                issueService.getIssuesById(id).then(function (success) {
                    result.push(success.data);

                });
                id++;
            }
        });

        $timeout(function () {
            $scope.issues = result;
            $scope.pageTitle = 'Dashboard';
            $scope.readyDownload = true;
            console.log(result);
        }, 19000)
    }]);