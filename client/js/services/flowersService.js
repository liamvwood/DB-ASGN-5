angular.module('flowers').factory('Flowers', function($http) {
    var methods = {
        getAll: function() {
            return $http.get('./api/flowers/');
        },
        getUrl: function(name) {
            let CUSTOM_SEARCH_ID = "002721976270332564454:irkkdg5omgc";
            let SERVER_KEY = "AIzaSyC-zlnAL8tDhvwSQGVe_qHuRUykdk1ZkVU";
            return $http.get(`https://www.googleapis.com/customsearch/v1?key=${SERVER_KEY}&cx=${CUSTOM_SEARCH_ID}&q=${name}&searchType=image&fileType=jpg&imgSize=small&num=1&alt=json`)
        }
    }
    return methods;
})