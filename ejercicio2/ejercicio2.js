const movies = [
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
    { title: 'Inception', releaseYear: 2010 },
    { title: 'Jurassic Park', releaseYear: 1993 },
    { title: 'The Shawshank Redemption', releaseYear: 1994 },
    { title: 'Pulp Fiction', releaseYear: 1994 },
    { title: 'Avatar', releaseYear: 2009 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Fight Club', releaseYear: 1999 },
    { title: 'Forrest Gump', releaseYear: 1994 }
  ];
  
  const antes2000 = []
  const despues2000 = []
  
for (const element of movies){
    if(element.releaseYear < 2000){
        antes2000.push(element)
    }

    else{
        despues2000.push(element)
    }
}

console.log("Antes del 2000 hay " + antes2000.length + " peliculas.")
console.log(antes2000)
console.log("Después del 2000 hay " + despues2000.length + " peliculas.")
console.log(despues2000)






  