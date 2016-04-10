app.factory('userIssueData', ['$resource', 'BASE_URL', function ($resource, BASE_URL) {


    function getIssues() {
        var progects = $resource(BASE_URL + 'projects');
        console.log(progects);
        return progects;
    }

    return {
        getIssue: getIssues
    }
}]);
