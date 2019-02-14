"use strict";

angular
    .module("ProfileApp")
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/profile", {
                template: `<profile-page-comp></profile-page-comp>`
            })
            .when("/edit-profile", {
                template: `<edit-comp></edit-comp>`
            })
            .when("/", {
                template: `<profile-page-comp></profile-page-comp>`
            })
            //if user doesnt want to go to the above otherwise go to to backup
            .otherwise({ reDirectTo: "/profile" });
    }]);