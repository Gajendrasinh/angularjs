

(function () {
    
         'use strict';
    
          // Service for get GET API
         angular.module('myApp').factory('toDoService', toDoService);
    
         function toDoService($q, $http) {
            var service = {};

            var baseURL = "https://jsonplaceholder.typicode.com/";

            service.todoList = function search () {
                var deferred = $q.defer();        
                $http.get(baseURL+'todos').success(function(data) {
                    deferred.resolve(data);
                }).error(function() {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.updateTask = function search (data) {
                var deferred = $q.defer();        
                $http.post(baseURL+'todos', data).success(function(data) {
                    deferred.resolve(data);
                }).error(function() {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.addNewTasks = function search (data) {
                var deferred = $q.defer();        
                $http.post(baseURL+'todos', data).success(function(data) {
                    deferred.resolve(data);
                }).error(function() {
                    deferred.reject();
                });
                return deferred.promise;
            };

            return service;
    
         }    
    
     })();