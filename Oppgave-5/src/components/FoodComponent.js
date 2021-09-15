const FoodComponent = (foodData) => {
    const food = ['Pizza', 'Hamburger', 'Coke'];
    return (
        <div>
        <ul>
            {food.map((mat) => (
                <li key={mat}>{mat}</li>
            ))}
         </ul>

         
         <ul>
         {foodData.foodData.map((mat) => (
                <li key={mat.name}>{mat.name}</li>
            ))}
        </ul>

     </div>
  )
}

  
  export default FoodComponent;