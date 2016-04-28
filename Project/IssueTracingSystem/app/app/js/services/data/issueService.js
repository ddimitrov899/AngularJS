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

        function getAllIssuesById(pageNumber) {
            var header = authentication.getUserHeaderStorage();
            var request = {
                method: 'GET',
                url: baseServiceUrl + 'issues?filter=&pageSize=4&pageNumber=' + pageNumber,
                headers: header
            };
            return $http(request);
        }

        function editIssuesById(data, Id) {
            var header = authentication.getUserHeaderStorage();
            var request = {
                method: 'PUT',
                url: baseServiceUrl + 'issues/' + Id,
                data: data,
                headers: header
            };
            return $http(request);
        }

        function changeStatus(Id, statusId) {
            var header = authentication.getUserHeaderStorage();
            var request = {
                method: 'PUT',
                url: baseServiceUrl + 'issues/' + Id + '/changestatus?statusid=' + statusId,
                headers: header
            };
            return $http(request);
        }

        function addIssue(issue) {
            var header = authentication.getUserHeaderStorage();
            var request = {
                method: 'POST',
                url: baseServiceUrl + 'issues/',
                data: issue,
                headers: header
            };
            return $http(request);
        }

        return {
            getIssuesById: getIssuesById,
            getAllIssuesById: getAllIssuesById,
            editIssuesById: editIssuesById,
            changeStatus: changeStatus,
            addIssue: addIssue
        }
    }]);
