'use strict';
app.factory('userService', ['$http', 'baseServiceUrl', 'authentication',
    function ($http, baseServiceUrl, authentication) {
        var isAdmin = false;

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
            isAdmin = false;
            var request = {
                method: 'POST',
                url: baseServiceUrl + 'api/Account/logout',
                headers: authentication.getUserHeaderStorage()
            };

            return $http(request);
        }

        function getAllUsers() {
            var request = {
                method: 'GET',
                url: baseServiceUrl + 'users',
                headers: authentication.getUserHeaderStorage()
            };

            return $http(request);
        }

        function getAllUsersByFilter() {
            var request = {
                method: 'GET',
                url: baseServiceUrl + 'users?filter=Username.Contains("oracle")&("admin@softuni")',
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

        function makeAdmin(userId) {
            var headerToken = authentication.getUserHeaderStorage();
            var request = {
                method: 'POST',
                url: baseServiceUrl + 'users/makeadmin',
                data: {'UserId': userId},
                headers: headerToken

            };
            return $http(request);
        }

        function userInfo() {
            var headerToken = authentication.getUserHeaderStorage();
            var request = {
                method: 'GET',
                url: baseServiceUrl + 'users/me',
                headers: headerToken
            };

            $http(request).then(function (admin) {
                isAdmin = admin.data;
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
            var isLogged = localStorage['user'] != undefined;
            return isLogged;
        }

        function setLocalStorageIsNormal() {
            localStorage['isNormal'] = isLoggedIn() && (!isAdminUser()) && (!isLeadProject());

        }

        function isNormalUser() {
            return localStorage['isNormal'] == 'true';
        }

        function isLeadProject() {
            var currentUser = getCurrentUser();
            var isLead = false;
            if (currentUser != undefined && currentUser.userName == 'oracle@gmail.bg') {
                isLead = true;
            }
            return isLead;
        }

        function isAdminUser() {
            return isAdmin.isAdmin;
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
            isAdminUser: isAdminUser,
            getAuthHeaders: getAuthHeaders,
            makeAdmin: makeAdmin,
            changePassword: changePassword,
            setLocalStorageIsNormal: setLocalStorageIsNormal,
            isLead: isLeadProject,
            getAllUsers: getAllUsers,
            getAllUsersByFilter: getAllUsersByFilter,
            userInfo: userInfo
        }
    }]);
