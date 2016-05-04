"use strict";
app.controller('AdminPanelController', ['$scope', '$timeout', '$location','issueService', 'authentication',
    function ($scope, $timeout, $location,issueService, authentication) {
        var isLogged = authentication.getUser();
        if(!isLogged){
            notifyService.showError('Please login first.');
            $location.path('/');
        }
    }]);

