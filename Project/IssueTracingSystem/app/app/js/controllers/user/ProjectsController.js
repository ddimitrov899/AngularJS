app.controller('ProjectsController', ['$scope', '$location', 'projectService', 'issueService', 'authentication', 'notifyService',
    function ($scope, $location, projectService, issueService, authentication, notifyService) {
        $scope.readyDownload = false;
        $scope.projects = [];
        var resultProject = [];
        var result = [];
        var currentId = 0;
        var numberOfProject;
        var isLogged = authentication.getUser();
        if (!isLogged) {
            notifyService.showError('Please login first.');
            $location.path('/');
        }
        projectService.getAllProject().then(function (data) {
            numberOfProject = data.data.length;
            var id = 1;
            while (id !== numberOfProject + 1) {
                issueService.getIssuesById(id).then(function (data) {
                    projectData.push(data.data.Project);
                    result.push(data.data);


                });
                id++;
            }

            $scope.projects = projectData;
        });
        $scope.selectedName = function (name) {
            if (name != undefined) {
                $scope.nameProject = name;
                $scope.readyDownload = true;
                $scope.issues = result;
                console.log(name);
            }
        }

    }]);
var projectData = [];

