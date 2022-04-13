import React from 'react'
import Button from '@mui/material/Button';

export default function AddItemButton({stock}) {
    const addItemButton = {
        theme: {
            width: '90%',
            height: '3rem',
            margin:'0 0 0.5rem 0'
        }
    } 

    // Disabled onAdd button
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
        <Button size="medium" color="primary" variant="contained" onClick={addItem} disabled={disabled} style={addItemButton.theme}>Agregar al carrito</Button>
    </>
  )
}