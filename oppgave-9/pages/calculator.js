import React, { useState } from 'react';


  

export default function Calculator() {
    const [calculator, setCalculation] = useState('');
    const [logs, setlogs] = useState([]);




    const calculatorChange = (event) => {
        setCalculation(event.currentTarget.value)
        event.preventDefault();

    }

    const showFeedback = (response) => {
        alert("Summen blir: " + response.data.sum)
        setlogs([...logs, response.data])
        console.log(logs)

    }
    const Knappforform = async(event) => {
        let calc = calculator;
        let parts = calc.split(/[*/+-]/);
        let methods = calc.replace(/[0-9]/g, '');
         postData(JSON.stringify({method : methods, numberOne : parts[0], numberTwo : parts[1]}))
        event.preventDefault();
      };

    async function postData(data) {
        const response = await fetch('/api/calculation', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
          },
          body: data
        });
       let callbackresponse =  await response.json();
        showFeedback(callbackresponse)
      }

    return (
     <>
     <form> 
      <label forhtml="calculator">
        Kalkuler
        <input type="text" id="title"  textholder="5*2" value={calculator} onChange={calculatorChange} required/>
      </label>


      <button type="submit"  onClick={Knappforform}>Calculate</button>

   </form>

<h1>Logg</h1>

   {logs?.length > 0
          ? logs.map((value) => (
              <li key={value.length} >{value.numberOne} {value.method} {value.numberTwo} =  {value.sum}</li>
            ))
          : null}
     </>
    )
  }
  