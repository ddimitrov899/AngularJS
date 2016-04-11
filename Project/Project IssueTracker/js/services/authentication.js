app.factory('authentication',['$location', function ($location) {
    var key = 'user';

    function saveUserData(data) {
        localStorage.setItem(key, data);
    }

    function getUserData() {
        var token = JSON.parse(localStorage.getItem(key));
        if (!token) {
            return false;
        }
        return token.data;
    }

    function getHeaders() {
        var headers = {};

        var userData = getUserData();
        if (userData) {
            headers.Authorization = 'Bearer ' + userData.access_token;
        }

        return headers;
    }

    function clearUserStorage() {
        localStorage.removeItem(key);
    }

    function isAdmin(user) {

    }

    function isLogin() {
            $location.path("/");
        return !!getUserData();

    }

    return {
        saveUserStorage: saveUserData,
        getUser: getUserData,
        getHeader: getHeaders,
        clearUserStorage: clearUserStorage,
        isAdmin: isAdmin,
        isLogin: isLogin
    }
}]);