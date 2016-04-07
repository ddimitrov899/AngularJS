app.factory('userIssueData', ['$resource', 'BASE_URL', function ($resource, BASE_URL) {


    function getIssues() {
        return $resource(BASE_URL + 'projects/');
    }

    return {
        getIssue: getIssues
    }
}]);
