app.factory('userData', ['$resource', '$window', '$http', 'BASE_URL', 'authentication', function ($resource, $window, $http, BASE_URL, authentication) {


    function registerUser(user) {
        var request = {
            method: 'POST',
            url: BASE_URL + 'api/account/register',
            data: user
        };

        $http(request).then(function (data) {
            loginUser(data.config.data);
        }, function (error) {
            console.error(error);
        });

    }

    function loginUser(user) {
        user.grant_type = 'password';
        var request = {
            method: 'POST',
            url: BASE_URL + 'api/Token',
            data: 'grant_type=' + user.grant_type +
            '&username=' + user.email +
            '&password=' + user.password,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}

        };

        return $http(request).then(function (data) {
            authentication.saveUserStorage(angular.toJson(data));
            authentication.isLogin();
            var header = authentication.getUserHeaderStorage();
            userMeIsAdmin(header);
            getAllUsers(header);
        });
    }

    function changePassword(user) {
        var header = authentication.getUserHeaderStorage(),
            request = {
                method: 'POST',
                url: BASE_URL + 'api/Account/ChangePassword',
                data:user,
                headers: header
            };

        return $http(request).then(function (data) {
            authentication.saveUserStorage(angular.toJson(data));
            authentication.isLogin();
        });
    }

    function userMeIsAdmin(header) {
        var request = {
            method: 'GET',
            url: BASE_URL + 'users/me',
            headers: header
        };
        $http(request).then(function (success) {
            console.log(success);
        })
    }

    function getAllUsers(header) {
        var request = {
            method: 'GET',
            url: BASE_URL + 'users/',
            headers: header
        };
        $http(request).then(function (success) {
            console.log(success);
        })
    }

    function makeAdmin(header) {
        var request = {
            method: 'PUT',
            url: BASE_URL + 'users/',
            headers: header
        };
        $http(request).then(function (success) {
            console.log(success);
        })
    }

    function logoutUser() {
        var request = {
            method: 'POST',
            url: BASE_URL + 'api/Account/logout',
            headers: authentication.getUserHeaderStorage()
        };

        $http(request).then(function (success) {
            authentication.clearUserStorage();

        });
    }

    return {
        register: registerUser,
        login: loginUser,
        changePassword: changePassword,
        logout: logoutUser,
        getAllUser: getAllUsers,
        makeAdmin: makeAdmin,
        userMeIsAdmin: userMeIsAdmin
    }
}]);