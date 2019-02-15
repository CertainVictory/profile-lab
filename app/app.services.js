"use strict";

function profileService($location) {
    const self = this;
    self.profiledata = {
        name: `Ducks Debuggington`,
        contact: 'duckdebug@gmail.com',
        bio: `I'm Ducks Debuggington and I'll help you out of a bind`
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