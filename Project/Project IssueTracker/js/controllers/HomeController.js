app.controller('HomeController', ['$scope', '$location', 'authentication', function ($scope, $location, authentication) {
   $scope.pageTitle = "Home Page";
    $scope.isVisible = false;
    $scope.loginButton = function () {
        $location.path('/login');
        $scope.isVisible = true;
    };
    $scope.registerButton = function () {
        $location.path('/register');
    };

   $scope.isLogin = authentication.isLogin();

}]);