(function() {
    "use strict";

    angular.module("appMain", ["ngRoute"])
        .config(function($routeProvider, $locationProvider) {

            $routeProvider.when("/", {
                controller: "toDoListController",
                controllerAs: "vm",
                templateUrl: "/views/toDoListView.html"
            });

            $routeProvider.otherwise({ redirectTo: "/" });

            $locationProvider.html5Mode(true);
        });
})();