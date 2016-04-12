app.controller('HomeController', ['$scope', '$location', 'authentication', function ($scope, $location, authentication) {
   $scope.pageTitle = "Home Page";
    $scope.visible = true;
    $scope.loginButton = function () {
        $location.path('/login');
    };
    $scope.registerButton = function () {
        $location.path('/register');
    };

   $scope.isLogin = authentication.isLogin();

}]);