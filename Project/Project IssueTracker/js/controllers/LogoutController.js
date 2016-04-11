app.controller('LogoutController', ['$scope', 'authentication', function ($scope, authentication) {
    authentication.clearUserStorage();
    authentication.isLogin();
}]);