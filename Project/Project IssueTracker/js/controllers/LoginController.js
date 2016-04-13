app.controller('LoginController', ['$scope', 'userData', function ($scope, userData) {
    $scope.pageTitle = 'Login';
    $scope.login = function (user) {
        userData.login(user).then(function (success) {
            $scope.isVisible = false;
            //notyPopUp.success('login')
        }, function (error) {
            //notyPopUp.error(error);
        });
    };

}]);