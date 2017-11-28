<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <script src="folder/angular.min.js" type="text/javascript"></script>

        <script src="folder/controller.js" type="text/javascript"></script>
        <link href="newcss.css" rel="stylesheet" type="text/css"/>
        <title></title>
    </head>
    <body ng-app="myApp" >
        <div ng-controller="controlador1">
            <article class="exercici01" ng-if="crearCombinacion">
                <h1>CREA COMBINACION</h1>
                <div class="combinacion">
                    <div class="valor{{opcio1}}" ng-click="missclick(1)"></div>
                    <div class="valor{{opcio2}}"ng-click="missclick(2)"></div>
                    <div class="valor{{opcio3}}"ng-click="missclick(3)"></div>
                    <button ng-click="aceptaCombinacion();" >ACEPTAR</button>
                </div>
            </article>
            <article ng-if="!crearCombinacion" class="exercici01" >
                <h1>VALIDA COMBINACION</h1>
                <div class="combinacion">
                    <div class="valor{{opcio1}}" ng-click="missclick(1)"></div>
                    <div class="valor{{opcio2}}"ng-click="missclick(2)"></div>
                    <div class="valor{{opcio3}}"ng-click="missclick(3)"></div>

                    <button ng-click="validarCombinacion();">VALIDAR</button>
                </div>


            </article>
            <article >
            <h1>Combinaciones</h1>
            <div ng-repeat="combinacion in combinaciones track by $index">
                <div class="combinacion">
                <div class="valor{{combinacion[0]}}"></div>
                <div class="valor{{combinacion[1]}}"></div>
                <div class="valor{{combinacion[2]}}"></div>
                </div>
            </div>

        </article>
        </div>
        
    </body>
</html>
