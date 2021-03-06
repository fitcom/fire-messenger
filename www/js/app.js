angular.module('fm', ['ionic', 'fm.controllers', 'fm.factories', 'firebase'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'templates/signup.html',
                controller: 'SignupCtrl'
            })
            .state('setup', {
                url: '/setup',
                templateUrl: 'templates/setup.html',
                controller: 'SetupCtrl'
            })
            .state('tabs', {
                url: '/tabs',
                templateUrl: 'templates/tabs.html',
                abstract:true
            })
            .state('tabs.chats', {
                url: '/chats',
                views:{
                    'chats-tab':{
                        templateUrl: 'templates/chats.html',
                        controller:'ChatsCtrl'
                    }
                }
            })
            .state('tabs.contacts', {
                url: '/contacts',
                views:{
                    'contacts-tab':{
                        templateUrl: 'templates/contacts.html',
                        controller:'ContactsCtrl'
                    }
                }
            })
            .state('tabs.settings', {
                url: '/settings',
                views:{
                    'settings-tab':{
                        templateUrl: 'templates/settings.html',
                        controller:'SettingsCtrl'
                    }
                }
            });
        $urlRouterProvider.otherwise('signup');
    })
    .run(function ($ionicPlatform) {

        Parse.initialize("2anmo4vkXyUZwIXr2oLajZBYp5vwTPU8VOUwbLoG", "HNeI1pYXF7Mvs4QXivMnkBNlLV4OMqpSuFwN8eMg");
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });
