angular.module('sightings').factory('Sightings', function($http) {
    var methods = {
        getRecents: function() {
            return $http.get('./api/sightings/');
        }
    }
})