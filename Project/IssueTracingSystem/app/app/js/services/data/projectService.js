"use strict";
app.factory('projectService', ['$http', 'baseServiceUrl', 'authentication', 
    function ($http, baseServiceUrl, authentication) {

    function getAllProject() {
        var header = authentication.getUserHeaderStorage();
        var request = {
            method: 'GET',
            url: baseServiceUrl + 'projects',
            headers: header
        };
        return $http(request);
    }

    function addProject(projectData) {
        var header = authentication.getUserHeaderStorage();
        var request = {
            method: 'POST',
            url: baseServiceUrl + 'projects',
            data: projectData,
            headers: header
        };
        return $http(request);
    }

    return {
        getAllProject: getAllProject,
        addProject: addProject
    }
}]);
