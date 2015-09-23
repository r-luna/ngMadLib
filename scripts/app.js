angular.module('app', ['ngMessages'])
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
    },
    ui: {
        canShowMadLib: false,
        canShowForm: true
    }
})
.controller('controller1', function(CONSTANTS, $scope) {
    $scope.c = CONSTANTS.vars;
    $scope.ui = CONSTANTS.ui;
    
    $scope.validateForm = function(){
        console.log($scope.myForm);
        var canShow = true;
        var o = $scope.c;
        for (p in o){
            if (o.hasOwnProperty(p) && o[p].length === 0){
                canShow = false;
                console.log(p,o[p].length);
                break;
            }
        }
        console.log(canShow);
        if (canShow){
            $scope.ui.canShowForm = false;
            $scope.ui.canShowMadLib = true;   
        }
    };
    
    $scope.startOver = function(){
        var o = $scope.c;
        for (p in o){
            o.hasOwnProperty(p) && (o[p] = '');
        }
        $scope.ui.canShowForm = true;
        $scope.ui.canShowMadLib = false;
        $scope.myForm.$setPristine();
    };
    
});