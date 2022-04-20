import React from 'react';
import Button from '@mui/material/Button';
import styles from '../styles.module.css';

export default function AddItemButton({stock}) {

    // Disabled Button
    let disabled = false;
    if (stock === "0") {
        disabled = true;
    } 

    // Add Item Button
    const addItem = () => {
        alert('agregado')
    }

  return (
    <>
        <Button size="medium" color="primary" variant="contained" onClick={addItem} disabled={disabled} className={styles.addItemButton} >Agregar al carrito</Button>
    </>
  )
}