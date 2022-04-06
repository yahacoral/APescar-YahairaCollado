import React, { useState } from "react";

export default function ItemCount({stock}) {
    const itemCount = {
        theme: {
          display:'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin:'0 2rem',
          padding: '0.25rem 0.5rem',
          borderRadius:'0.5rem',
          border: '1px solid gray',
          backgroundColor: 'white',
          color: 'black'
        }
      }
      
      const itemCountButton = {
        theme: {
          background: 'white',
          border: 'none',
          fontSize: '1.5rem',
          color: '#1b5e9d', 
          cursor: 'pointer'
        }
      }

    // State to store count value
    const [count, setCount] = useState(1);

    // Function to increment count by 1
    const incrementCount = () => {
    // Update state with incremented value
        if(count < stock){
            setCount(count + 1);
        }
    };

    //Function to decrease count by 1
    const decreaseCount = () => {
      if(count > 1){
        setCount(count - 1);
      }
    }

  return (
    <>
        <div style={itemCount.theme}>
            <button onClick={decreaseCount}  style={itemCountButton.theme}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount} style={itemCountButton.theme}>+</button>
        </div>
        <span>Stock: {stock} unidades</span>   
    </>
  )
}