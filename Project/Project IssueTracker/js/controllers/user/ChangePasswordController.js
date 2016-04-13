app.controller('ChangePasswordController', ['$scope', 'userData', function ($scope, userData) {
    $scope.pageTitle = 'Change Password';

    $scope.changePasswordClick = function (user) {
        userData.changePassword(user);
    };

}]);