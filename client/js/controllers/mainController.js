angular.module('flowersApp').controller('MainController', function($scope, Flowers, Sightings, Features){
    $scope.flowers = [];
    $scope.features = [];
    Flowers.getAll().then(function(res) {
        $scope.flowers = res.data;
    })

    Features.getAll().then(function(res){
        $scope.features = res.data;
    });

    $scope.showDetails = function(flower) {
        let builder = flower;
        Sightings.getRecents(builder["COMNAME"]).then(function(res) {
            let recents = res.data;
            builder["RECENTS"] = recents;
        })
        $scope.detailedInfo = builder;
    }
    $scope.addSighting = function() {
        Sightings.create($scope.entry);
    }
})