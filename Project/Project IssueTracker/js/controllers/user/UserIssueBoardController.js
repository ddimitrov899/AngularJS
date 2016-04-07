app.controller('UserIssueBoardController',['$scope', 'userIssueData',function ($scope, userIssueData) {
    $scope.pageTitle = 'Dashboard';

    $scope.issues = function dashBoardData() {
        return userIssueData.getIssue();
    }
}]);