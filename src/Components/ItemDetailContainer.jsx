import React,{useState} from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ItemDetail from './ItemDetail'
import { productArray } from "../Products";

export default function ItemDetailContainer({id}) {

  // Show Item Detail
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Get Item by id
  const getItem = productArray.find( item => item.id === id);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '70%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const closeButton = {
    theme: {
      position: 'absolute',
      right: '1.5rem' ,
      top: '0.8rem',
      color:'black',
    }
  }

  const detailsButton = {
    theme: {
        width: '90%',
        height: '3rem',
        margin:'0'
    }
  }   

  return (
    <>  
      <Button size="medium" color="primary" variant="outlined" onClick={handleOpen} style={detailsButton.theme}>
        Ver más detalles
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <IconButton aria-label="close" onClick={handleClose} style={closeButton.theme}>
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
