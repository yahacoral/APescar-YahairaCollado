import React,{useState} from 'react'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { bannerInfo } from "../contents";
import styles from '../styles.module.css';

export default function Banner() {
  const [show, setShow]=useState(true)

  const banner= {
    content: bannerInfo
  }

  return (
    <>
      { show && 
        <div className={styles.banner}>
          <p>{banner.content}</p>
          <IconButton aria-label="close" onClick={()=>setShow(false)} className={styles.closeBanner}>
            <CloseIcon />
          </IconButton>
        </div>
      }
    </>
  )
}
