"use strict";
app.factory('authenticationProject', ['$http', 'BASE_URL', 'authentication',
    function ($http, BASE_URL, authentication) {

        function getNumberProjectsData() {
            var header = authentication.getUserHeaderStorage(),
                resource = {
                    method: 'GET',
                    url: BASE_URL + 'projects',
                    headers: header
                };

            var result = $http(resource);
            return result;
        }

        return {
            getNumberProjects: getNumberProjectsData
        }
    }]);