app.controller('ProjectsController', ['$scope', '$location', 'projectService', 'authentication', 'issueService', 'userService', 'notifyService',
    function ($scope, $location, projectService, authentication,issueService, userService, notifyService) {
        $scope.readyDownload = false;
        $scope.readyListProject = false;
        $scope.projects = [];
        $scope.authService = userService;
        var result = [];
        var projectData = [];
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
        $scope.readyListProject = true;
        $scope.selectedName = function (name) {
            if (name != undefined) {
                $scope.nameProject = name;
                $scope.readyDownload = true;
                $scope.issues = result;
                console.log(name);
            }
        };

        $scope.addButton = function (id) {
            $location.path('/projects/' + id + '/add-issue');
        }

    }]);


