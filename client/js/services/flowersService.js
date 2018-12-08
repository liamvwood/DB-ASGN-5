angular.module('flowers').factory('Flowers', function($http) {
    var methods = {
        getAll: function() {
            return $http.get('./api/flowers/');
        },
        getFlower: function(name) {
            
        }
    }
    return methods;
})