"use strict";
app.controller('AdminController', ['$scope', '$timeout', '$location','issueService', 'authentication', 'notifyService',
    function ($scope, $timeout, $location,issueService, authentication, notifyService) {
        var isLogged = authentication.getUser();
        if(!isLogged){
            notifyService.showError('Please login first.');
            $location.path('/');
        }

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

                }, function (error) {
                    notifyService.showError('', error.data);
                });
                id++;
            }
        });

        $timeout(function () {
            $scope.issues = result;
            $scope.pageTitle = 'Dashboard';
            $scope.readyDownload = true;
        }, 19000)
    }]);