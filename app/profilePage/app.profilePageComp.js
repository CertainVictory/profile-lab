"use strict";

const profilePageComp = {
    template: `
    <section class="flexus-profile">
    <div class="photo-bg-color">
    <img src="assets/duck.png">
    </div>
    <div class="profile-content">
   <div class="name-con">
    <p class="profile-name">{{$ctrl.profiledata.name}}</p>
    <p  class="profile-contact">{{$ctrl.profiledata.contact}}</p>
</div>
<div class="bio-and-btn">
    <p>{{$ctrl.profiledata.bio}}</p>
    </div>
    <button ng-click="$ctrl.editRedirect();">Edit</a>

    </div>
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