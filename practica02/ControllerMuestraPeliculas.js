app.controller('MuestraPeliculas',['$scope','PeliculasService'
        ,function($scope,PeliculasService){
            $scope.numPeli=0;
            $scope.actoresController = PeliculasService.actores;
            //$scope.peliculaController=PeliculasService.peliculas[$scope.numPeli];
            $scope.peliculasController=PeliculasService.peliculas;
    }]);
