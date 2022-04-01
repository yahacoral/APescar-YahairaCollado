import React,{useState} from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCart from './ShoppingCart';

export default function CartWidget() {
    const [show, setShow]=useState(false)

    const shoppingCartButton = {
      theme: {
        margin: '0 1rem',
      }
    }

    const closeButton = {
      theme: {
        position: 'relative',
        top: '5rem',
        left: '11.5rem',
        color:'#1b1b1b',
        zIndex: '100',
      }
    }
      
  return (
    <>
        { show && 
          <div>
            <ShoppingCart />

            {/* Close Button */}
            <IconButton aria-label="close" onClick={()=>setShow(false)} style={closeButton.theme}>
              <CloseIcon />
            </IconButton>
          </div>
        }

        {/* Shopping Cart Button */}
        <Button variant="outlined" startIcon={<ShoppingCartIcon />}  onClick={()=>setShow(!show)} style={shoppingCartButton.theme}>
        
        {/* TODO: Update total pricing*/}
        S/. 0.00
        
        </Button>
    </>
  )
}
