app.controller('HomeController',
    ['$scope', '$location', 'authentication',
        function ($scope, $location, authentication) {
            $scope.pageTitle = "Home Page";
            $scope.pathButton = function (path) {
                $location.path(path);
            };
            $scope.isLogin = authentication.isLogin();

        }]);