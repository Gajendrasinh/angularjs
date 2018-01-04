(function () {

        'use strict';

        // Controller for get GET API
        angular.module('myApp')

    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
        
        $stateProvider   
            .state('todo', {
                url: '/',
                templateUrl: 'todo.html',
                controller  : 'toDoCtrl',
            }).state('about', {
                url: '/about',
                templateUrl: 'about.html',
                controller  : 'aboutCtrl',
            });
            
        });   

})();
    