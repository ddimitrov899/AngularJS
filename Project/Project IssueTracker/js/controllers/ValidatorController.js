app.controller('ValidatorController', ['$scope', function ($scope) {

    $scope.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    $scope.confirmPasswordPattern = '\\w{6,100}';
    $scope.passwordPattern = '\\w{6,100}';
}]);