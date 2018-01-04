

 (function () {
    
    'use strict';

    // Controller for get GET API
    angular.module('myApp').controller('aboutCtrl', aboutCtrl);

    function aboutCtrl($scope, $http) {

        $scope.aboutus = "Hello world"
       
    }

})();