app.factory('userData', ['$resource', 'BASE_URL', function ($resource, BASE_URL) {


    function registerUser(user) {
        return $resource(BASE_URL + 'users/register').save(user);
        // authentication.saveUserStorage(token);
    }

    function loginUser(user) {
        // $resource(BASE_URL + 'users/login');
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