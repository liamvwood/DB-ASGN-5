angular.module('sightings').factory('Sightings', function($http) {
    var methods = {
        getRecents: function(name) {
            return $http.get('./api/sightings/recents/' + name);
        },
        create: function(entry) {
            return $http.post('./api/sightings', entry);
        }
    }
    return methods;
})