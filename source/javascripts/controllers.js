angular.module('openPdu.controllers', ['openPdu.services'])
    .controller('totalController', ['$scope', 'Socket', function($scope, Socket) {
        
        // Get all the sockets and update the totals
        Socket.query(function(socket){
            $scope.sockets = socket;
            $scope.totalPower = 0;
            $scope.totalCurrent = 0;
            for(var i=0; i<socket.length; i++){
                $scope.totalPower += socket[i].power;
                $scope.totalCurrent += socket[i].current;
            }
        });
        
        // TODO
        //$scope.socket = Socket.get({socketId: 1});
}]);
