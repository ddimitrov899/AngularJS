"use strict";

app.controller('ProfilePasswordController', ['$scope', '$rootScope', '$location', 'userService', 'authentication', 'notifyService',
    function ($scope, $rootScope, $location, userService, authentication, notifyService) {
        var isLogged = authentication.getUser();
        if(!isLogged){
            notifyService.showError('Please login first.');
            $location.path('/');
        }
        $scope.changePass = function (passwordChange) {
            if (passwordChange.newPassword != passwordChange.confirmPassword) {
                notifyService.showError('The new password and confirm password is not mach!');
            } else {
                userService.changePassword(passwordChange).then(function (success) {
                    notifyService.showSuccess('Successfully change password!');
                    userService.logout().then(function (success) {
                        authentication.clearUserStorage();
                        $location.path('/');
                    });

                }, function(error){
                    console.log(error);
                    notifyService.showError('The old password in not mach!', error);
                })
            }
        }
    }]);