"use strict";
app.factory('userIssueData', ['$resource', '$http', 'BASE_URL', 'authentication',
    function ($resource, $http, BASE_URL, authentication ) {


        function getIssues(id) {
            var header = authentication.getUserHeaderStorage(),
                request = {
                    method: 'GET',
                    url: BASE_URL + 'issues/' + id,
                    headers: header
                };

                var issues = $http(request);

            return issues;
        }

        return {
            getIssue: getIssues
        }
    }]);
