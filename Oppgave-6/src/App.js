import './App.css';
import Nav from '../src/Components/navbar';
import Form from '../src/Components/form';
import Todos from '../src/Components/todo';
import { useState } from "react";

function App( ) {
  const [formData, insertFormData] = useState([])

  const deleteData = name => {
    insertFormData(formData.filter(item => item.id !== name))
    console.log(name)
  };

  const buttonstatus = (content, title) => {
      insertFormData([...formData, {
        "id": Math.floor(Math.random() * 500),
        "name": title,
        "content" : content},
      ])
    };


  return (
    <div >
     <Nav />
     <main>
    <Form buttonstatus={buttonstatus}/>
    <Todos formData={formData} deleteData={deleteData} />
    </main>
    </div>
  );
}

export default App;
