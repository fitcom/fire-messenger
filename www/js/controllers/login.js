/**
 * Created by osei on 6/28/15.
 */
angular.module('fm.controllers')
    .controller('LoginCtrl', function (Core, $scope) {
        $scope.login = function (email, password) {
            Core.userLogin(email, password)
        };
    });