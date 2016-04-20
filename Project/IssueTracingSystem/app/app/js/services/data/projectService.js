app.factory('projectService', ['$http', 'baseServiceUrl', 'authentication', function ($http, baseServiceUrl, authentication) {

    function getAllProject() {
        var header = authentication.getUserHeaderStorage();
        var request = {
            method: 'GET',
            url: baseServiceUrl + 'projects/',
            headers: header
        };

        return $http(request);
    }

    return {
        getAllProject: getAllProject
    }
}]);
