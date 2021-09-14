import { useState } from "react";

// Deconstructer addInput fra prop.addInput
const Input = ({ addInput, buttonstatus }) => {
  const [state, setState] = useState();


  // trigges når vi trykker på knappen
  const Knappforform = () => {
    // trigger addInput som kommer fra parent
    alert(state)
    buttonstatus(true)

  };

  const handleChange = (event) => {
    setState(event.currentTarget.value)
     console.log("Det blir skrevet noe her")
     addInput(event.currentTarget.value)

  };

  return (
    <div>
      <input
        value={state} onChange={handleChange}
      />
      <button onClick={Knappforform}>Lagre</button>
    </div>
  );
};

export default Input;