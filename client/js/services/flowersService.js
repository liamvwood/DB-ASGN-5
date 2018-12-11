angular.module('flowers').factory('Flowers', function($http) {
    var methods = {
        getAll: function() {
            return $http.get('./api/flowers/');
        },
        getUrl: function(name) {
            let CUSTOM_SEARCH_ID = "002721976270332564454:irkkdg5omgc";
            let SERVER_KEY = "AIzaSyCJleSyNsxXXnEqtskMIL3tTZv2u8Vechs";
            return $http.get(`https://www.googleapis.com/customsearch/v1?key=${SERVER_KEY}&cx=${CUSTOM_SEARCH_ID}&q=${name}&searchType=image&fileType=jpg&imgSize=xlarge&num=1&alt=json`)
        }
    }
    return methods;
})