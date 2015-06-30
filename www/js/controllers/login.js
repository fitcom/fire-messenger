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

            var valid = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);

            $scope.emailOk = valid.test(newVal[0]);

            $scope.passOk = newVal[1].length > 4;


            $scope.ready = !!($scope.emailOk && $scope.passOk);
        });


        $scope.login = function (email, password) {
            Core.userLogin(email, password)
        };
    });