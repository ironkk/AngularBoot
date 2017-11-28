angular.module('myApp', [])
        .controller('controlador1', ['$scope',

            function ($scope) {
                $scope.opcio1 = 1;
                $scope.opcio2 = 1;
                $scope.opcio3 = 1;
                $scope.crearCombinacion = true;
                $scope.password = [];



                $scope.missclick = function (quiEts) {
                    if (quiEts == 1) {

                        $scope.opcio1 += 1;
                        if ($scope.opcio1 > 4) {
                            $scope.opcio1 = 1;
                        }
                    } else if (quiEts == 2) {
                        $scope.opcio2 += 1;
                        if ($scope.opcio2 > 4) {
                            $scope.opcio2 = 1;
                        }
                    } else if (quiEts == 3) {
                        $scope.opcio3 += 1;
                        if ($scope.opcio3 > 4) {
                            $scope.opcio3 = 1;
                        }
                    }
                };

                $scope.aceptaCombinacion = function () {
                    $scope.crearCombinacion = false;
                    $scope.password = [$scope.opcio1, $scope.opcio2, $scope.opcio3];
                };
                $scope.combinaciones = [];
                $scope.combinaciones[0]=[1,2,3];
                $scope.combinaciones[1]=[1,1,4];
                
                $scope.validarCombinacion = function () {
                    var combi =[$scope.opcio1,$scope.opcio2,$scope.opcio3];
                    $scope.combinaciones.push(combi);

                };
            }]);