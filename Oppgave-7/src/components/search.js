
import { useState } from 'react';


const SearchEngine = ({setSearch}) => {


    const [Showsearching, Setsearching] = useState([])

const searchChange = (event) => {
    Setsearching(event.currentTarget.value)
}

const SubmitChange = async () =>  {
     const response =  await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=fb108aae&s=${Showsearching}`);
     
     try {
       // starter prosessen med å gjøre som svaret til json
       // venter på svaret
       const data = await response.json();
       await setSearch(data.Search)

     } catch (error) {
       // logger feilmeldingen
       console.log(error);
     }
}





    return(
        <form>
            <label forhtml="search">
                <input type="text" name="search" id="search" value={Showsearching} onChange={searchChange} />
            </label>
            <button type="button" id="submitBtn" onClick={SubmitChange}>Search</button>
        </form>
    )
};

export default SearchEngine;