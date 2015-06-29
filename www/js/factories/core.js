/**
 * Created by osei on 6/28/15.
 */
angular.module('fm.factories')
.factory('Core', function ($firebaseAuth,$state,$ionicPopup,$ionicLoading) {

        var ref = new Firebase('https://fire-messenger.firebaseio.com/');
        var authObj = $firebaseAuth(ref);

        var userSignup = function (email,password) {
            $ionicLoading.show({
                template:'<ion-spinner></ion-spinner>'
            });
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
                $ionicLoading.hide();
                $state.go('setup');
            }).catch(function(error) {
                $ionicLoading.hide();
                $ionicPopup.alert({
                    title: 'Sorry',
                    template: error
                });
            });
            
        };

        
        var userLogin = function (email,password) {

            $ionicLoading.show({
                template:'<ion-spinner></ion-spinner>'
            });
            authObj.$authWithPassword({
                email: email,
                password: password
            }).then(function() {
                $ionicLoading.hide();
                $state.go('tabs.chats');
            }).catch(function(error) {
                $ionicLoading.hide();
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