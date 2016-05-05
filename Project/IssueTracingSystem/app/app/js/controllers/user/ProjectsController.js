app.controller('ProjectsController', ['$scope', '$location', 'projectService', 'authentication', 'issueService', 'userService', 'notifyService',
    function ($scope, $location, projectService, authentication,issueService, userService, notifyService) {
        $scope.readyDownload = false;
        $scope.readyListProject = false;
        $scope.projects = [];
        $scope.authService = userService;
        var result = [];
        var isLogged = authentication.getUser();
        if (!isLogged) {
            notifyService.showError('Please login first.');
            $location.path('/');
        }

        userService.userInfo().then(function (success) {
           projectService.getProjectByLeadId(success.data.Id).then(function (success) {
               $scope.projects = success.data.Projects;
               console.log(success);
           })
        });



        // projectService.getAllProject().then(function (data) {
        //     numberOfProject = data.data.length;
        //     console.log(data);
        //     var id = 1;
        //     while (id !== numberOfProject + 1) {
        //         issueService.getIssuesById(id).then(function (data) {
        //             projectData.push(data.data.Project);
        //             result.push(data.data);
        //
        //
        //         });
        //         id++;
        //     }
        //
        //     $scope.projects = projectData;
        //
        // });
        $scope.readyListProject = true;
        $scope.selectedName = function (name) {
            if (name != undefined) {
                $scope.nameProject = name;
                $scope.readyDownload = true;
                $scope.issues = result;
            }
        };

        $scope.addButton = function (id) {
            $location.path('/projects/' + id + '/add-issue');
        }

    }]);


