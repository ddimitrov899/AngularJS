app.controller('RegisterController', ['$scope', 'userData', function ($scope, userData) {
    $scope.pageTitle = 'Register';
    
    $scope.register = function (user) {
         userData.register(user);
    };
}]);