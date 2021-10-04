
import Movie from './movies'
import Search from './search'
import { useState, useEffect } from 'react';



const Main = () => {
    
    const [Showsearch, searchSet] = useState([])

    const setSearch = async (search) => {
         searchSet(search)    
  }

  

  useEffect( () => {
    fetchData()
    
    async function fetchData() {
      const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=fb108aae&s=starwars`);
      try {
        // starter prosessen med å gjøre som svaret til json
        // venter på svaret
        const data =  await response.json();
  
          await searchSet(data.Search.slice(-5))
  
      } catch (error) {
        // logger feilmeldingen
        console.log(error);
      }


    }
    
  }, [])

  return (
    <div className="Layout">
    <Search setSearch={setSearch} />
    <Movie Showsearch={Showsearch} />
    </div>
  )
}

export default Main