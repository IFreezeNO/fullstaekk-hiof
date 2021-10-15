import './App.css';
import RetApi from './component/retrievedData';
import { useState, useEffect } from 'react';
import React from 'react';


function App() {

  
  const [data, setData] = useState([])


  useEffect( () => {
    fetchData()
    
    async function fetchData() {

      const response =  await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=fb108aae&s=fl%C3%A5klypa`);
      try {
        // starter prosessen med å gjøre som svaret til json
        // venter på svaret
        const retrievedUrlData = await response.json();
        await setData(retrievedUrlData.Search)

      } catch (error) {
        // logger feilmeldingen
        console.log(error);
      }
    }
    
  }, [setData])
  

  return (
    <>
    <h1>En liten liste over alle flåklypa filmene</h1>
    <RetApi data={data}/>
    </>
  );
}

export default App;
