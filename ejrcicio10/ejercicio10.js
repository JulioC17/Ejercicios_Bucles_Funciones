const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };
  
   function getCapital(country) {
   
   let capital = ""
    
      for (const key in capitals){
         
         if(country == key){
          capital = capitals[key]
         }
      }
      
      if(capital === ""){
        console.log("País no reconocido")
      }

      else{
        console.log(capital)
      }
   
  }   
    
    
   getCapital("Germany") 
  


  