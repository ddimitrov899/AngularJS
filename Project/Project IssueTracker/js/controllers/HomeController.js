app.controller('HomeController', ['$scope', 'authentication', function ($scope, authentication) {
   $scope.pageTitle = "Home Page";

   $scope.isLogin = authentication.isLogin();
}]);