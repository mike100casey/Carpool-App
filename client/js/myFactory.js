todoApp.factory('journeyFactory', function($http) {
    var urlBase = '/api/todos';

    var _todoService = {};

    _todoService.saveTodo = function(todo) {
        return $http.post(urlBase, todo);
    };
    return _todoService;
});
