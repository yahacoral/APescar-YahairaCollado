import React, { useState } from "react";
import styles from '../styles.module.css';

export default function ItemCount({stock}) {
    
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
        <div className={styles.itemCount}>
            <button onClick={decreaseCount}  className={styles.itemCountButton}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount} className={styles.itemCountButton}>+</button>
        </div>
        <span>Stock: {stock} unidades</span>   
    </>
  )
}