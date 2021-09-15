import {React, useState} from 'react';

import './styles.scss';
import MyComponent from './components/Mycomponent'
import Food from './components/FoodComponent'
import Wrapper from './components/WrapperComponent'
import Input from './components/inputfieldComponent'

import Alert from './components/alertComponent.js'


const App = () => {

const [inputFromChild, setInputFromChild] = useState('')
const [Clicked, setClicked] = useState(false)

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

  const FoodProducts = [
    {name: "Sjokolade"},
    {name: "Iskrem" }
  ];

 return(
<div>
<MyComponent />
<Input addInput={setInputFromChild} buttonstatus={buttonstatus} />
<Wrapper title={"Testing av Props"} />
<Food foodData={FoodProducts} />
<Alert addInput={addInput} buttonstatus={buttonstatus} />
{status}
</div>)
};

export default App;
