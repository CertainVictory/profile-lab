"use strict";

const editComp = {
    template: `
    <section class="flexus-edit">
    <form class="edit-content" ng-submit="$ctrl.addNew($ctrl.profiledata)">
    <p class="form-title">Use form below to update your profile.</p>
    
    <p class="title-style">Name</p>
    <input type="text" ng-model="$ctrl.profiledata.name" placeholder="">

    <p class="title-style">Contact</p>
    <input type="text" ng-model="$ctrl.profiledata.contact" placeholder="">

    <p class="title-style">Bio</p>
    <input class="big-input" type="text" ng-model="$ctrl.profiledata.bio" placeholder="">
    <button>Update</button>

    </form>
    </section>
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