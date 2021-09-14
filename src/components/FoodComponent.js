const FoodComponent = () => {
    const food = ['Pizza', 'Hamburger', 'Coke'];
    
    return (
        <ul>
            {food.map((mat) => (
                <li key={mat}>{mat}</li>
            ))}
         </ul>
  )
}

  
  export default FoodComponent;