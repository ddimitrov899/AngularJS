"use strict";
app.controller('AdminController', ['$scope', '$timeout', '$location', 'projectService', 'authentication',
    function ($scope, $timeout, $location, projectService, authentication) {
        var isLogged = authentication.getUser();
        if (!isLogged) {
            notifyService.showError('Please login first.');
            $location.path('/');
        }

    }]);