app.factory('userData', ['$resource', 'BASE_URL', 'authentication', function ($resource, BASE_URL, authentication) {


    function registerUser(user) {
        console.log(user);
         return $resource(BASE_URL + 'api/Account/Register').save(user).$promise.then(function (data) {
             console.log(data);
             authentication.saveUserStorage(angular.toJson(data));
         }, function (error) {
             console.error(error);
         });
        
    }

    function loginUser(user) {
        $resource(BASE_URL + 'api/Token').save(user).$promise.then(function (data) {
            console.log(data);
        });
        // authentication.saveUserStorage(token);
    }

    function logoutUser() {
        // $resource(BASE_URL + 'users/logout');
        // authentication.clearUserStorage();
    }

    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser
    }
}]);