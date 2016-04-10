app.controller('UserIssueBoardController', ['$scope', 'userIssueData', function ($scope, userIssueData) {
    $scope.pageTitle = 'Dashboard';

    $scope.issues = function () {
        userIssueData.getIssue();
    };
}]);