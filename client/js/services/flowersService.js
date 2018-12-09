angular.module('flowers').factory('Flowers', function($http) {
    var methods = {
        getAll: function() {
            return $http.get('./api/flowers/');
<<<<<<< HEAD
=======
        },
        getFlower: function(name) {
            
>>>>>>> 2caf33efa1b4a0a61dcc92aba824ab29adf2bca6
        }
    }
    return methods;
})