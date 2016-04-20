'use strict';

app.factory('userService', ['$http', 'baseServiceUrl', 'authentication',
    function ($http, baseServiceUrl, authentication) {

        function login(user) {
            user.grant_type = 'password';
            var request = {
                method: 'POST',
                url: baseServiceUrl + 'api/Token',
                data: 'grant_type=' + user.grant_type +
                '&username=' + user.email +
                '&password=' + user.password,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            };

            return $http(request);
        }

        function register(user) {
            var request = {
                method: 'POST',
                url: baseServiceUrl + 'api/account/register',
                data: user
            };

            return $http(request);
                
            
        }

        function logout() {
            var request = {
                method: 'POST',
                url: baseServiceUrl + 'api/Account/logout',
                headers: authentication.getUserHeaderStorage()
            };

            return $http(request);
        }

        function getCurrentUser() {
            var userToken = authentication.getUser();
            if (userToken) {
                return userToken;
            }
        }

        function makeAdmin(user) {
            var headerToken = authentication.getUserHeaderStorage();
            var request = {
                method: 'POST',
                url: baseServiceUrl + 'users/makeadmin',
                data: user.Id,
                headers: headerToken

            };
            //TODO: Test
            return $http(request);
        }

        function userMeIsAdmin() {
            var headerToken = authentication.getUserHeaderStorage();
            var request = {
                method: 'GET',
                url: baseServiceUrl + 'users/me',
                headers: headerToken
            };

            $http(request).then(function (admin) {
                return admin.data.isAdmin;
            });

        }

        function changePassword(changePassword) {
            var headerToken = authentication.getUserHeaderStorage();
            var request = {
                method: 'POST',
                url: baseServiceUrl + 'api/account/changepassword',
                data: changePassword,
                headers: headerToken
            };

            return $http(request);

        }

        function isAnonymous() {
            var anonymous = localStorage['user'] == undefined;
            return anonymous;
        }

        function isLoggedIn() {
            return localStorage['user'] != undefined;
        }

        function isNormalUser() {
            var currentUser = getCurrentUser();
            var currentUserIsAdmin = userMeIsAdmin();
            var user = (currentUser != undefined) && (!currentUserIsAdmin);
            return user;
        }

        function isAdmin() {
            var currentUser = getCurrentUser();
            var currentUserIsAdmin = userMeIsAdmin();
            var admin = (currentUser != undefined) && (currentUserIsAdmin);
            return admin;
        }

        function getAuthHeaders() {
            authentication.getUserHeaderStorage();
        }

        return {
            login: login,
            register: register,
            logout: logout,
            isAnonymous: isAnonymous,
            isLoggedIn: isLoggedIn,
            isNormalUser: isNormalUser,
            isAdmin: isAdmin,
            getAuthHeaders: getAuthHeaders,
            makeAdmin: makeAdmin,
            changePassword: changePassword


        }
    }]);
