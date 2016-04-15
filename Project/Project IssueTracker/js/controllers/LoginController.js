app.controller('LoginController', ['$scope', 'userData', 'authentication', function ($scope, userData, authentication) {
    $scope.pageTitle = 'Login';
    $scope.login = function (user) {
        userData.login(user).then(function (success) {
        }, function (error) {
            //notyPopUp.error(error);
        });
    };

}]);