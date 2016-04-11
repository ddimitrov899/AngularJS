app.factory('userIssueData', ['$resource', 'BASE_URL', 'authentication', function ($resource, BASE_URL, authentication) {


    function getIssues() {
        var progects = $resource.get(BASE_URL + 'projects');
        console.log(progects);
        return progects;
    }

    return {
        getIssue: getIssues
    }
}]);
