angular.module('openPdu.services', ['openPdu.config', 'ngResource'])
    .factory('Socket', ['$resource', 'CONFIG', function($resource, CONFIG) {
        // By default two method are defined:
        // query: method that calls http://apiroot/socket and expects JSON array
        // get: method that calls http://apiroot/socket/id and expects a single JSON object 
        return $resource(CONFIG.API_ROOT + '/socket/:socketId',
            {socketId: '@id'});
        }]);



