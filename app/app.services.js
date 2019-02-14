"use strict";

function profileService($location) {
    const self = this;
    self.profiledata = {
        name: `frlkjf`,
        contact: '555-3333',
        bio: `hecking floofer`
    }
    self.editProfile = function() {
        $location.path("/edit-profile")
    }
    self.setUserProfile = function(profiledata) {
        self.profiledata = profiledata;
        $location.path("/profile")
        
    }
    self.getUserProfile = function() {
        // $location.path("/profile")
    return self.profiledata;
    }
}




angular
    .module("ProfileApp")
    .service("profileService", profileService);