angular.module('flowers').controller('FlowersController', function($scope, Flowers){
    $scope.flowers =[]
    Flowers.getAll().then(function(res) {
        $scope.flowers = res.data;
    })

    
})