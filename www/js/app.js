angular.module('fm', ['ionic','fm.controllers','fm.factories'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('login',{
            url:'/login',
            templateUrl:'templates/login.html',
            controller:'LoginCtrl'
          })
          .state('signup',{
            url:'/signup',
            templateUrl:'templates/signup.html',
            controller:'SignupCtrl'
          });
      $urlRouterProvider.otherwise('signup');
    })
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
