app.factory('userData', ['$resource', '$http', 'BASE_URL', 'authentication', function ($resource, $http, BASE_URL, authentication) {


    function registerUser(user) {
         return $resource(BASE_URL + 'api/Account/Register').save(user).$promise.then(function (data) {
             loginUser(data);
         }, function (error) {
             console.error(error);
         });
        
    }

    function loginUser(user) {
        user.grant_type = 'password';
        $http.post(BASE_URL + 'api/Token', 'grant_type=' + user.grant_type + '&username=' + user.email + '&password=' + user.password,
            {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).then(function (data) {
            authentication.saveUserStorage(angular.toJson(data));
            authentication.isLogin();
        });
    }

    function usersMeIsAdmin() {
        // $http.get(BASE_URL + 'users/me', )
    }

    function logoutUser() {
        $resource(BASE_URL + 'api/Account/logout');
        authentication.clearUserStorage();
    }

    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser
    }
}]);