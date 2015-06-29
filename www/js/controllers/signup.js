/**
 * Created by osei on 6/28/15.
 */
angular.module('fm.controllers')
    .controller('SignupCtrl', function (Core, $scope) {


        $scope.$watchGroup([function () {
            return document.getElementById('username').value;
        }, function () {
            return document.getElementById('password').value;
        }], function (newVal) {

            $scope.userOk = newVal[0].length > 4;

            $scope.passOk = newVal[1].length > 5;
        });

        $scope.signup = function (email, password) {
            Core.userSignup(email, password)
        };


    });