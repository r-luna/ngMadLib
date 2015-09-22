angular.module('app', [])
.constant('CONSTANTS',{
    version: 0.1,
    vars: {
        malename:'',
        jobtitle:'',
        tedioustask:'',
        dirtytask:'',
        celebrity:'',
        useless:'',
        obnoxious:'',
        hugenumber:'',
        adjective:''
    }
})
.controller('controller1', function(CONSTANTS, $scope) {
    $scope.c = CONSTANTS.vars;
});