import {React, useState} from 'react';

import './styles.scss';
import MyComponent from './components/Mycomponent'
import Food from './components/FoodComponent'
import Wrapper from './components/WrapperComponent'
import Input from './components/inputfieldComponent'

import Alert from './components/alertComponent.js'


const App = () => {

// flyttet håndtering av state til Parent
const [inputFromChild, setInputFromChild] = useState('')
const [Clicked, setClicked] = useState(false)

// flyttet addInput til Parent
const addInput = (state) => {
  setInputFromChild(state);
};

const buttonstatus = (state) => {
    setClicked(state);
    console.log(Clicked)
  };

  let status;

  if (Clicked) {
    status = <p>{inputFromChild}</p>;
  } else {
    status = "";
  }


 return(
<div>
<MyComponent></MyComponent>
<Input addInput={setInputFromChild} buttonstatus={buttonstatus}></Input>

<Wrapper title={"Testing av Props"}></Wrapper> 
<Food></Food>


      <Alert addInput={addInput} buttonstatus={buttonstatus} />
      
      {status}

</div>)
};

export default App;
