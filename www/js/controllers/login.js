/**
 * Created by osei on 6/28/15.
 */
angular.module('fm.controllers')
    .controller('LoginCtrl', function (Core, $scope) {


        $scope.$watchGroup([function () {
            return document.getElementById('email').value;
        }, function () {
            return document.getElementById('password').value;
        }], function (newVal) {

           // var valid = /^\S+@\S+\.\S+$/;


          //  $scope.emailOk = !!valid.test(newVal[0]);

            $scope.passOk = newVal[1].length > 4;

        });


        $scope.login = function (email, password) {
            Core.userLogin(email, password)
        };
    });