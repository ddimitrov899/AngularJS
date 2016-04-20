"use strict";

app.controller('LoginController', ['$scope', '$rootScope', '$location', 'userService', 'authentication', 'notifyService',
    function ($scope, $rootScope, $location, userService, authentication, notifyService) {
        $scope.login = function (user) {
            userService.login(user).then(function (success) {
                console.log(success);
                authentication.saveUserStorage(angular.toJson(success));
                notifyService.showSuccess('Success Login' + 'Welcome ' + success.data.userName +' !');
                $location.path('/')
            }, function (error) {
                console.log(error);
                notifyService.showError('Login failed:', error.data)
            })
        }
    }]);