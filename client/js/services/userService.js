angular.module('users').factory('Users', function($http) {
    var methods = {
        signin: function(data) {
            return $http.post('./api/users/signin', data);
        },
        signup: function(data) {
            return $http.put('./api/users/signup', data);
        }
    }
    return methods;
})