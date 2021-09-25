import '../App.css';


const ToDo = ({formData, deleteData}) => {


    function deleteButton(value) {
    deleteData(value)
     }
      


    return (
        <article>
        <h2>My todos</h2>
       
        <div className="flexibox">
        {
             
             formData.map((value) => (
          <div key={value.id}  className="item">
              <h2>{value.name}</h2>
              <p>{value.content}</p>
              <button onClick={() => deleteButton(value.id)} id="status">Complete</button>

          </div>      


            )
            )
            
            }
          

        </div>
      </article>
   
    )
}


export default ToDo;