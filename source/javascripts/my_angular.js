angular.module('openPdu', [
    'openPdu.controllers',
    'openPdu.config',
    'openPdu.services',
]);

angular.module('openPdu.config', [])
        .constant('CONFIG', {
            'API_ROOT': '/openpduapi',
        });
