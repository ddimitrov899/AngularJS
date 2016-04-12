app.factory('userData', ['$resource', '$http', 'BASE_URL', 'authentication', function ($resource, $http, BASE_URL, authentication) {


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

    function logoutUser() {
        var request = {
            method: 'POST',
            url: BASE_URL + 'api/Account/logout',
            headers: authentication.getHeaders()
        };
        $http(request).then(function (success) {
            authentication.clearUserStorage();
        });

    }

    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser
    }
}]);