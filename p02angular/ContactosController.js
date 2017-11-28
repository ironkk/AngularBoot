app.controller('MuestraPeliculas',['$scope','ContactosService'
        ,function($scope,ContactosService){
           
            $scope.contactos=ContactosService.contactos;
            $scope.addContacto=function(){
              var contacto = new Contacto(); 
              contacto.nom = $scope.nomNouContacte;
              contacto.email = $scope.nomNouEmail;
              ContactosService.contactos.push(contacto);
            };

    }]);
