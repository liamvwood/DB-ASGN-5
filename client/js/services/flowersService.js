angular.module('flowers').factory('Flowers', function($http) {
    var methods = {
        getAll: function() {
            return $http.get('./api/flowers/');
        },
        getUrl: function(name) {
            let CUSTOM_SEARCH_ID = "INSERT KEY";
            let SERVER_KEY = "INSET API KEY";
            return $http.get(`https://www.googleapis.com/customsearch/v1?key=${SERVER_KEY}&cx=${CUSTOM_SEARCH_ID}&q=${name}&searchType=image&fileType=jpg&imgSize=xlarge&num=1&alt=json`)
        },
        updateFlower: function(name, data) {
            return $http.put('./api/flowers/' + name, data);
        }
    }
    return methods;
})