import React,{useState} from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from './Cart';
import styles from '../styles.module.css';

export default function CartWidget() {
    const [show, setShow]=useState(false)
      
  return (
    <>
        { show && 
          <div>
            <Cart />

            <IconButton aria-label="close" onClick={()=>setShow(false)} className={styles.closeCart}>
              <CloseIcon />
            </IconButton>
          </div>
        }

        {/* Shopping Cart Widget*/}
        <Button variant="outlined" startIcon={<ShoppingCartIcon />}  onClick={()=>setShow(!show)} >
          S/. 0.00       
        </Button>
    </>
  )
}
