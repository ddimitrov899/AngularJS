app.controller('ValidatorController', ['$scope', function ($scope) {

    $scope.mobilePattern = '\\d{1,9}';
    $scope.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    $scope.confirmPasswordPattern = '\\w{6,100}';
    $scope.passwordPatern = '\\w{6,100}';
}]);