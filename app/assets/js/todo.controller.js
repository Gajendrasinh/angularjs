

 (function () {
    
    'use strict';

    // Controller for get GET API
    angular.module('myApp').controller('toDoCtrl', toDoCtrl);

    function toDoCtrl($scope, $http, toDoService) {

        $scope.showForm = false;
        $scope.showSelected = false;
        $scope.form ={};
        $scope.addNewItem = function() {
            $scope.showForm = true;
        };

        $scope.editTask = function(data) {
            $scope.form = data;
            $scope.showForm = true;
        };

        $scope.getSelectedTask = function(data) {
            toDoService.getTodoList(data).then(function(data) {
                $scope.userTask = data;
                $scope.showSelected = true;
            })
            .catch(function() {
                $scope.error = 'data not fount';
            });
        };


        $scope.submitForm = function(){
           console.log($scope.form.id)
           if($scope.form.id){
                toDoService.updateTask($scope.form).then(function(data) {
                    $scope.showForm = false;
                    $scope.form ={};
                })
           }else{
                toDoService.addNewTasks($scope.form).then(function(data) {
                    $scope.showForm = false;
                    $scope.form ={};
                })
           }
            
        }
        
        toDoService.todoList().then(function(data) {
            $scope.lists = data;
        })
        .catch(function() {
            $scope.error = 'data not fount';
        });

    }

})();