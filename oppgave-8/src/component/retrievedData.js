import React from 'react';


const ApiRetrieved = ({data}) => {

    return(
        <>
        <ul>
        {data?.length > 0
          ? data.map((value) => (
              <li key={value.imdbID} >{value.Title} </li>
            ))
          : null}
      </ul>

     <p>Det er {data.length} filmer i objektet.</p>
       </>
    )
   
}

export default ApiRetrieved;