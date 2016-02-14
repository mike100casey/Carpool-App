todoApp = angular.module('todoApp', ['ngRoute','ui.router','ngAutocomplete','todoApp.directive.map'])

.config(function($stateProvider) {
    $stateProvider
        .state('site', {
            url: "",
            views: {
                "navbar": { templateUrl: '/partials/navbar/navbar.html',controller: 'NavbarController'},
                "content": { templateUrl: '/partials/todo.html',controller: 'TodoCtrl'}
            }
        })
        //.state('route1', {
        //    url: "/route1",
        //    views: {
        //        "viewA": { template: "route1.viewA" },
        //        "viewB": { template: "route1.viewB" }
        //    }
        //})
        //.state('route2', {
        //    url: "/route2",
        //    views: {
        //        "viewA": { template: "route2.viewA" },
        //        "viewB": { template: "route2.viewB" }
        //    }
        //})
});

