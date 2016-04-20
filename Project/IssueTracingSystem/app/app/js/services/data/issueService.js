app.factory('issueService', ['$http', 'baseServiceUrl', 'authentication', function ($http, baseServiceUrl, authentication) {

    function getIssueById(projectId) {
        var header = authentication.getUserHeaderStorage();
        var request = {
            method: 'GET',
            url:baseServiceUrl+'issue/' + projectId,
            headers: header
        }
        return $http(request);
    }

    return {
        getIssueById: getIssueById
    }
}]);
