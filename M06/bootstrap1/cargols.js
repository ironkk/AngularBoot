


var sprints = [];

function Cargol() {

    this.nombre;
    this.punts;
    this.velocitat;
    this.distancia = 0;
    this.ranking;
    this.sprint;

    this.addAvansa = function () {
        this.sprint = Math.floor((Math.random() * this.velocitat) + 1);
        this.distancia += this.sprint;

    };



}


var c1 = new Cargol();
c1.nombre = "Cargol 1";
c1.punts = 0;
c1.velocitat = 10 + c1.punts;

var c2 = new Cargol();
c2.nombre = "Cargol 2";
c2.punts = 0;
c2.velocitat = 10 + c2.punts;

var c3 = new Cargol();
c3.nombre = "Cargol 3";
c3.punts = 0;
c3.velocitat = 10 + c3.punts;

var c4 = new Cargol();
c4.nombre = "Cargol 4";
c4.punts = 0;
c4.velocitat = 10 + c4.punts;


function inici() {


    document.getElementById("ranking").innerHTML +=
            '<div class="col-xs-12 col-sm-6 col-md-6">1r ' + c1.nombre + ' | Punts' + c1.punts + ' | Vel' + c1.velocitat + '</div>'
            + '<div class="col-xs-12 col-sm-6 col-md-6">2r ' + c2.nombre + ' | Punts' + c2.punts + ' | Vel' + c2.velocitat + ' </div>'
            + '<div class="col-xs-12 col-sm-6 col-md-6">3r ' + c3.nombre + ' |  Punts' + c3.punts + ' | Vel' + c3.velocitat + '</div>'
            + '<div class="col-xs-12 col-sm-6 col-md-6">4r ' + c4.nombre + ' | Punts' + c4.punts + ' | Vel' + c4.velocitat + '</div>';



}
var posicions = [c1, c2, c3, c4];


function ranking() {
    var rank = posicions.sort(function (a, b) {
        return a.punts - b.punts
    });

    document.getElementById("ranking").innerHTML =
            '<div  class="col-xs-12 col-sm-12 col-md-12">RANKING</div>'
            + '<div class="col-xs-12 col-sm-6 col-md-6">1r' + rank[0] + ' </div>'
            + '<div class="col-xs-12 col-sm-6 col-md-6">2r' + rank[1] + ' </div>'
            + '<div class="col-xs-12 col-sm-6 col-md-6">3r' + rank[2] + '</div>'
            + '<div class="col-xs-12 col-sm-6 col-md-6">4r' + rank[3] + '</div>';
}

function mostraArray() {

    for (k = 0; k < sprints.length; k++) {

        info.innerHTML += "<div>" + sprints[k] + "<div>";

    }
}

function finalizacarrera() {
    innerHTML += "Carrera finalizada ";

    ranking();

}

function run() {
    c1.addAvansa();
    c2.addAvansa();
    c3.addAvansa();
    c4.addAvansa();

    var sprint = [c1, c2, c3, c4];

    var sprin = sprint.sort(function (a, b) {
        return a.punts - b.punts
    });

    sprints.push(sprin);

    document.getElementById("sprint").innerHTML +=
            '<div class="col-xs-12 col-sm-6 col-md-6">1r ' + sprin[0].nombre + ' | Punts' + sprin[0].distancia + '</div>'
            + '<div class="col-xs-12 col-sm-6 col-md-6">2r ' + sprin[1].nombre + ' | Punts' + sprin[1].distancia + ' </div>'
            + '<div class="col-xs-12 col-sm-6 col-md-6">3r ' + sprin[2].nombre + ' |  Punts' + sprin[2].distancia + '</div>'
            + '<div class="col-xs-12 col-sm-6 col-md-6">4r ' + sprin[3].nombre + ' | Punts' + sprin[3].distancia + '</div>';


}


function borrar() {
    var numero = window.prompt("Indica el numero");

    array.splice(numero, 1);

}

function nuevacarrera() {
    sprin = [];

}