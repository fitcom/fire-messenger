/**
 * Created by osei on 6/28/15.
 */
angular.module('fm.factories')
.factory('Core', function ($firebaseAuth,$state,$ionicPopup) {

        var ref = new Firebase('https://fire-messenger.firebaseio.com/');
        var authObj = $firebaseAuth(ref);



        var userSignup = function (email,password) {

            authObj.$createUser({
                email: email,
                password: password
            }).then(function(userData) {
                console.log("User " + userData.uid + " created successfully!");

                return authObj.$authWithPassword({
                    email: email,
                    password: password
                });


            }).then(function() {
                $state.go('setup');
            }).catch(function(error) {
                $ionicPopup.alert({
                    title: 'Sorry',
                    template: error
                });
            });
            
        };

        
        var userLogin = function (email,password) {
            authObj.$authWithPassword({
                email: email,
                password: password
            }).then(function() {
                $state.go('tabs.chats');
            }).catch(function(error) {
                $ionicPopup.alert({
                    title: 'Sorry',
                    template: error
                });
            });
        };


        return {
            userSignup:userSignup,
            userLogin:userLogin
        }
    });