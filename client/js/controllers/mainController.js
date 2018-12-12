angular.module('flowersApp').controller('MainController', function ($scope, Flowers, Sightings, Features, Users) {
    $scope.flowers = [];
    $scope.editFlower = {};
    $scope.features = [];
    $scope.entry = {};
    $scope.currFlowerImageUrl = '';
    $scope.showFlowerImage = false;
    $scope.edittingName = false;
    $scope.edittingLatin = false;
    $scope.ship = [];
    $scope.isLoggedIn = false;

    $scope.editLatin = function () {
        if ($scope.edittingLatin) {
            $scope.edittingLatin = false;
            let updated = false;
            if ($scope.editFlower.GENUS != undefined && $scope.editFlower.GENUS != $scope.detailedInfo.GENUS) {
                $scope.ship.push(
                    {
                        'COLUMN': 'GENUS',
                        'VALUE': $scope.editFlower.GENUS
                    })
                updated = true;
            }
            if ($scope.editFlower.SPECIES != undefined && $scope.editFlower.SPECIES != $scope.detailedInfo.SPECIES) {
                $scope.ship.push(
                    {
                        'COLUMN': 'SPECIES',
                        'VALUE': $scope.editFlower.SPECIES
                    })
                updated = true;
            }
            if (updated)
                Flowers.updateFlower($scope.detailedInfo['COMNAME'], $scope.ship)
                    .then(function (res) {
                        $scope.ship = [];
                        $scope.refresh();
                    })
        }
        else
            $scope.edittingLatin = true;
    }

    $scope.editName = function () {
        if ($scope.edittingName) {
            $scope.edittingName = false;
            if ($scope.editFlower.COMNAME != undefined && $scope.editFlower.COMNAME != $scope.detailedInfo.COMNAME) {
                $scope.ship.push(
                    {
                        'COLUMN': 'COMNAME',
                        'VALUE': $scope.editFlower.COMNAME
                    })
                Flowers.updateFlower($scope.detailedInfo['COMNAME'], $scope.ship)
                    .then(function (res) {
                        $scope.ship = [];
                        $scope.refresh();
                    })
            }
        }
        else
            $scope.edittingName = true;
    }

    $scope.refresh = function () {
        Flowers.getAll().then(function (res) {
            $scope.flowers = res.data;
        })
    }
    $scope.refresh();

    Features.getAll().then(function (res) {
        $scope.features = res.data;
    });

    document.getElementById('moreInfo').addEventListener('selected', function (e) {
        console.log("event");
        $scope.entry.LOCATION = e.detail;
    })

    $scope.showDetails = function (flower) {
        $scope.showFlowerImage = false;
        let builder = flower;
        Sightings.getRecents(builder["COMNAME"])
            .then(function (res) {
                let recents = res.data;
                builder['RECENTS'] = recents;
            })
            .catch(function (err) {
                console.log(err);
            })
        Flowers.getUrl(`${builder["GENUS"]} ${builder["SPECIES"]}`).then(function (res) {
            $scope.currFlowerImageUrl = res.data.items[0].image.thumbnailLink;
            $scope.showFlowerImage = true;
        })
        $scope.detailedInfo = builder;
        angular.element('#moreInfo').collapse("show");
    }

    $scope.addSighting = function () {
        Sightings.create($scope.entry)
            .catch(function (err) {
                console.log(err);
            });
    }

    $scope.logout = function() {
        $scope.isLoggedIn = false;
    }

})