"use strict";

const profilePageComp = {
    template: `
    <section class="temp-box2">
    <p>IMG GOES HERE</p>
    <p>{{$ctrl.profiledata.name}}</p>

    <p>{{$ctrl.profiledata.contact}}</p>

    <p>{{$ctrl.profiledata.bio}}</p>
    <button ng-click="$ctrl.editRedirect();">Edit</a>
    </section>
    `,
    controller: ["profileService", function(profileService){
        const vm = this;

   
        profileService.getUserProfile();
            vm.profiledata = profileService.getUserProfile();
        vm.editRedirect = function() {
            profileService.editProfile();
        }
    }]
}




angular
    .module("ProfileApp")
    .component("profilePageComp", profilePageComp)