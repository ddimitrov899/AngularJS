app.controller('ProjectsController', ['$scope', '$location', 'projectService', 'issueService', 'authentication', 'notifyService',
    function ($scope, $location, projectService, issueService, authentication, notifyService) {
        $scope.readyDownload = false;
        var result = [];
        var currentId = 0;

        var isLogged = authentication.getUser();
        if (!isLogged) {
            notifyService.showError('Please login first.');
            $location.path('/');
        }else {
            projectService.getAllProject().then(function (data) {
                $scope.projects = data.data;
                console.log(data);
            });
        }
        $scope.selectedId = function (id) {

            if (id != undefined && id !== currentId) {
                currentId = id;

                issueService.getIssuesById(id).then(function (data) {
                    console.log(data);
                    $scope.readyDownload = true;

                    result.push(data.data);
                    $scope.issues = result;
                    result = [];
                })
            }
        };
        
    }]);