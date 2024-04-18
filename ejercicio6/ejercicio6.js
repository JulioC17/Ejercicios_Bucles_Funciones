// Ejercicio 6

// Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

// Utiliza bucles para lograrlo e imprime el objeto final por consola.

const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
  ];
  
 let agrupadas = []
 let decada70 = []
 let decada80 = []
 let decada90 = []
 let decada2000 = []
 
 for (const element of starWarsMovies){
    if(element.releaseYear >= 1970 && element.releaseYear <1980){
        decada70.push(element.title) 
        }

    else if(element.releaseYear >= 1980 && element.releaseYear <1990){
       decada80.push(element.title)
       }

    else if(element.releaseYear >= 1990 && element.releaseYear <2000){
        decada90.push(element.title)
        }

     else {
        decada2000.push(element.title)
        }
}
agrupadas.push({"Década de los 70 ": decada70}, {"Década de los 80 ": decada80}, {"Década de los 90 ": decada90}, {"Década de los 2000 y posterior ": decada2000})
      


console.log(agrupadas)


 
 
  
  