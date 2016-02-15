todoApp.factory('journeyFactory', function($http) {
    var urlBase = '/api/journey';

    var _todoService = {};

    _todoService.getJourney = function() {
        return $http.get(urlBase);
    };

    _todoService.saveTodo = function(todo) {
        return $http.post(urlBase, todo);
    };
    return _todoService;
});

todoApp.factory('registerFactory', function($http) {
    var urlBase = '/api/registerUser';

    var _todoService = {};

    _todoService.getAllUser = function() {
        return $http.get(urlBase);
    };

    _todoService.getUser = function(id) {
        return $http.get(urlBase + '/' + id);
    };
    _todoService.saveUser = function(todo) {
        return $http.post(urlBase, todo);
    };
    return _todoService;
});
    todoApp.factory('makeFactory', function($http) {
        var urlBase = '/api/make';

        var _todoService = {};

        _todoService.getAllmakes = function() {
            return $http.get(urlBase);
        };

        return _todoService;


});