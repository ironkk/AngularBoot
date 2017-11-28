app.service("PeliculasService", function () {

    this.actores = [["Harrison", "Ford"], ["Mary Sean", "Young"]];
    this.pelicula = [this.actores, "Blade Runner", "Ridley Scott", 1982];
    this.pelicula2 = [[["Harrison", "Ford"], ["Mark", "Hamill"]], "Star Wars", "George Lucas", 1977];
    this.peliculas = [this.pelicula, this.pelicula2];
}

);