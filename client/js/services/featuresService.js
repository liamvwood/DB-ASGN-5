angular.module('features').factory('Features', function($http) {
    var methods = {
        getAll: function() {
            return $http.get('./api/features/');
        }
    }
})