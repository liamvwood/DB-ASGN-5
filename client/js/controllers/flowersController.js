angular.module('flowers').controller('FlowersController', function($scope, Flowers){
    $scope.flowers = [];
    Flowers.getAll().then(function(res) {
        $scope.flowers = res.data;
    })

    $scope.showDetails = function(flower) {
<<<<<<< HEAD
        $scope.detailedInfo = flower;
=======
        
>>>>>>> 2caf33efa1b4a0a61dcc92aba824ab29adf2bca6
    }
})