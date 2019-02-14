"use strict";

const editComp = {
    template: `
    <form class="temp-box" ng-submit="$ctrl.addNew($ctrl.profiledata)">
    <p>USE FORM BELOW TO </p>
    <p>Name</p>
    <input type="text" ng-model="$ctrl.profiledata.name" placeholder="">

    <p>Contact</p>
    <input type="text" ng-model="$ctrl.profiledata.contact" placeholder="">

    <p>bio</p>
    <input type="text" ng-model="$ctrl.profiledata.bio" placeholder="">
    <a href="#!/profile">Add Things</a>

    </form>
    `,
    controller: ["profileService", function(profileService) {
        const vm = this;
        vm.profiledata = profileService.getUserProfile();
        vm.addNew = function(profiledata) {
            profileService.setUserProfile(profiledata)
        }
    }]
}


angular
    .module("ProfileApp")
    .component("editComp", editComp)