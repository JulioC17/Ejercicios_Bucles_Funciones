// Ejercicio 7
const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
  ];
  
  
  const rock = []
  const metal = []
  const pop = []
  const country = []
  const grunge = []
  const agrupadas = []

  for (const element of tracks){
    
    if (element.genre === "Metal"){
      metal.push(element.title)
    }

    else if (element.genre === "Rock"){
      rock.push(element.title)
    }

    else if (element.genre === "Pop"){
      pop.push(element.title)
    }

    else if (element.genre === "Country"){
      country.push(element.title)
    }

    else {
      grunge.push(element.title)
    }
  }

  agrupadas.push({Genero: "Rock", Canciones : rock }, {Genero: "Metal", Canciones : metal },
  {Genero: "Pop", Canciones : pop}, {Genero: "Country", Canciones : country},
  {Genero: "Grunge", Canciones : grunge })





  console.log(agrupadas)

  
  