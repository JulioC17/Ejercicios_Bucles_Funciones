const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
  ];
  
  function findOldestXMen(masViejo) {
    
    let antiguo = 0 
    const masAntiguo = []
    
    for (const element of masViejo){
        if(element.year > antiguo){
            antiguo = element.year
        }
}

    for (const element of masViejo){
        if (element.year < antiguo){
        antiguo = element.year
    }       
}

    for (const element of masViejo){
        if(element.year === antiguo){
            masAntiguo.push(element.name)
        }
        
    }
        
    console.log ({"Los personajes mas antiguos son ": masAntiguo, "Año de aparición ": antiguo})
    
}

findOldestXMen(xMen)
  
  

