import React,{useState} from 'react'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { bannerInfo } from "../contents";

export default function Banner() {
  const [show, setShow]=useState(true)

  const bannerBox = {
    content: bannerInfo,
    
    theme: {
      padding: '0.25rem 0',
      textAlign: 'center',
      backgroundColor: '#1b5e9d',
      color: 'white'
    }
  }

  const closeButton = {
    theme: {
      position: 'absolute',
      right: '1.5rem' ,
      top: '0.8rem',
      color:'white',
    }
  }

  return (
    <>
      { show && 
        <div style={bannerBox.theme}>
          <p>{bannerBox.content}</p>
        </div>
      }
   
      <IconButton aria-label="close" onClick={()=>setShow(false)} style={closeButton.theme}>
        <CloseIcon />
      </IconButton>
    </>
  )
}
