const movies = [
    { title: 'Inception', duration: 148 },
    { title: 'The Dark Knight', duration: 152 },
    { title: 'Interstellar', duration: 169 },
    { title: 'Dunkirk', duration: 106 },
    { title: 'The Prestige', duration: 130 },
    { title: 'Memento', duration: 113 },
    { title: 'Batman Begins', duration: 140 },
    { title: 'The Dark Knight Rises', duration: 164 },
    { title: 'Tenet', duration: 150 },
    { title: 'Insomnia', duration: 118 }
  ];
  
  function averageMovieDuration(peliculas) {
    
    let suma = 0
    let promedio = 0

    for (const element of peliculas){
        suma = suma + element.duration
        promedio = suma / peliculas.length
        }
    
    
        // console.log("El Promedio de duración de todas las películas es " + promedio + " minutos")
     return promedio
  }
  
  averageMovieDuration(movies)