"use strict";
app.controller('AdminPanelController', ['$location', 'authentication', 'notifyService',
    function ($location, authentication, notifyService) {
        var isLogged = authentication.getUser();
        if (!isLogged) {
            notifyService.showError('Please login first.');
            $location.path('/');
        }
    }]);

