app.controller('loginCtrl', function($scope, $rootScope, sesion) {

    $scope.inicio = function(){

        $scope.user = '';
        $scope.psw = '';
        $rootScope.mensaje = '';
        $rootScope.cargar = false;
        $rootScope.cerrar = true;
    }

    $scope.login = function(){

        $rootScope.mensaje = '';
        sesion.login($scope.user,$scope.psw);
    }
    
});