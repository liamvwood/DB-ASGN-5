angular.module('flowersApp').controller('MainController', function($scope, Flowers, Sightings, Features) {
    $scope.flowers = [];
    $scope.features = [];
    $scope.entry = {};
    $scope.currFlowerImageUrl = '';
    $scope.showFlowerImage = false;


    Flowers.getAll().then(function(res) {
        $scope.flowers = res.data;
    })

    Features.getAll().then(function(res){
        $scope.features = res.data;
    });

    document.getElementById('moreInfo').addEventListener('selected', function(e) {
        console.log("event");
        $scope.entry.LOCATION = e.detail;
    })

    $scope.showDetails = function(flower) {
        $scope.showFlowerImage = false;
        let builder = flower;
        Sightings.getRecents(builder["COMNAME"])
            .then(function(res) {
                let recents = res.data;
                builder['RECENTS'] = recents;
            })
            .catch(function(err) {
                console.log(err);
            })
        Flowers.getUrl(`${builder["GENUS"]} ${builder["SPECIES"]}`).then(function(res){
            $scope.currFlowerImageUrl = res.data.items[0].image.thumbnailLink;
            $scope.showFlowerImage = true;
        })
        $scope.detailedInfo = builder;
        angular.element('#moreInfo').collapse("show");
    }

    $scope.addSighting = function() {
        Sightings.create($scope.entry)
        .catch(function(err) {
            console.log(err);
        });
    }
})