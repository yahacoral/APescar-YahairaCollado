import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ShoppingCart() {

  const shoppingCart = {
    theme: {
      position: 'absolute',
      top:'4.4rem',
      right:'-1.5rem',
      height:'calc(100vh - 5rem)',
      width:'20rem',
      padding: '0.5rem 2rem',
      boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
      color: '#1b1b1b',
      background: 'white'
    }
  }

  return (
    <>
      <div style={shoppingCart.theme}>
        <h2>Mi carrito</h2>

        {/* TODO: add status */}
        <ShoppingCartIcon />
        <p>Tu carrito aún está vacío. Comienza a llenarlo.</p>
        
      </div>
    </>
  )
}