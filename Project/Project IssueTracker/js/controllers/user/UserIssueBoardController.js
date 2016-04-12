app.controller('UserIssueBoardController', ['$scope', 'userIssueData', function ($scope, userIssueData) {
    $scope.pageTitle = 'Dashboard';

    
    userIssueData.getIssue().then(function (data) {
        console.log(data);
        $scope.issues = data;
    });
    
}]);