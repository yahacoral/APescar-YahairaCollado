import React,{useState} from 'react'
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
                top: '1rem',
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '2rem',
                color:'white',
                cursor: 'pointer'
        }
    }

  return (
    <>
    {/* Conditional Rendering */}
      { show && 
        <div style={bannerBox.theme}>
          <p>{bannerBox.content}</p>
        </div>
      }
      <button onClick={()=>setShow(false)} style={closeButton.theme}>&times;</button>
    </>
  )
}
