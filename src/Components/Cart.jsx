import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from '../styles.module.css';

export default function Cart() {

  return (
    <>
      <div className={styles.cart}>
        <h2>Mi carrito</h2>

        <ShoppingCartIcon />
        <p>Tu carrito aún está vacío. Comienza a llenarlo.</p>
        
      </div>
    </>
  )
}