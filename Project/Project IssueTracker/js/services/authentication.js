app.factory('authentication', ['localStorageService', function (localStorageServiceProvider) {
    var key = 'user';

    function saveUserData(data) {
        localStorageServiceProvider.set(key, data);
    }

    function getUserData() {
        localStorageServiceProvider.get(key);
    }

    return {
        saveUserStorage: saveUserData,
        getUser: getUserData
    }
}]);