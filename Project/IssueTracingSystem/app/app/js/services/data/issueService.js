"use strict";
app.factory('issueService', ['$http', 'baseServiceUrl', 'authentication',
    function ($http, baseServiceUrl, authentication) {

        function getIssuesById(projectId) {
            var header = authentication.getUserHeaderStorage();
            var request = {
                method: 'GET',
                url: baseServiceUrl + 'issues/' + projectId,
                headers: header
            };
            return $http(request);
        }

        return {
            getIssuesById: getIssuesById
        }
    }]);
