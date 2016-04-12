app.controller('NavHeaderDirectiveController', ['$scope', 'authentication', function ($scope, authentication) {
    $scope.isLogin = authentication.isLogin();
}]);