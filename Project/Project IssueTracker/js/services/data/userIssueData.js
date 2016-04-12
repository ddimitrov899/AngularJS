app.factory('userIssueData', ['$resource', '$http', 'BASE_URL', 'authentication', function ($resource, $http, BASE_URL, authentication) {


    function getIssues() {
        var header = authentication.getUserHeaderStorage(),
            request = {
                method: 'GET',
                url: BASE_URL + 'projects',
                headers: header
            },
            projects = $http(request);
        return projects;
    }

    return {
        getIssue: getIssues
    }
}]);
