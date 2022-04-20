import React,{useState} from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ItemDetail from './ItemDetail'
import { productArray } from "../Products";
import styles from '../styles.module.css'

export default function ItemDetailContainer({id}) {

  // Show Item Detail
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Get Item by id
  const getItem = productArray.find( item => item.id === id);

  return (
    <>  
      <Button size="medium" color="primary" variant="outlined" onClick={handleOpen} className={styles.itemDetailButton}>
        Ver más detalles
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box className={styles.itemDetailContainer}>
          <IconButton aria-label="close" onClick={handleClose} className={styles.closeItemDetail}>
            <CloseIcon />
          </IconButton>
          <ItemDetail
            item={getItem}
          />
        </Box>
      </Modal>
    </>
  )
}
