import '../App.css';
import { useState } from "react";


const Form = ({buttonstatus}) => {
    const [titleForm, setTitleForm] = useState("");
    const [contentForm, setContentForm] = useState("");

    
    const titleChange = (event) => {
        setTitleForm(event.currentTarget.value)
        event.preventDefault();

    }

    

    const contentChange = (event) => {
        setContentForm(event.currentTarget.value)
        event.preventDefault();

    }
  
    const Knappforform = (event) => {
        buttonstatus(contentForm, titleForm)
        event.preventDefault();
      };
  

    return(
<section>
   <form> 
      <label fovcrhtml="title">
        Title
        <input type="text" id="title"  value={titleForm} onChange={titleChange} required/>
      </label>

      <label forhtml="content">
        Content
        <textarea id="content" value={contentForm} onChange={contentChange} required></textarea>
      </label>

      <button type="submit"  onClick={Knappforform}>Add</button>
   </form>
</section>
    )
}


export default Form;