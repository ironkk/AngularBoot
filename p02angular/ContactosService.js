app.service("ContactosService", function () {
       var cont1 = new Contacto();
    cont1.nom="Zelda";
    cont1.email="zelda@fjsj.com";
    var cont2 = new Contacto();
    cont2.nom="sjdo";
    cont2.email="ajsj@ggmd.com"
    
    this.contactos = [cont1,cont2];

}

);

function Contacto() {
    //definir estructura
    this.nom = "";
    this.email = "";
 
}
