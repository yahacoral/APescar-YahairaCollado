import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';
import ItemDetailContainer from './ItemDetailContainer';

export default function Item({title, price, image, stock}) {

    const cardActions = {
        theme: {
            display: 'block'
        }
    }

    const getItemButton = {
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

    // Get Item Button
    const getItem = () => {
        alert('agregado')
    }
    
  return (
    <>
        <Card sx={{ maxWidth: 345, margin: '1rem' }}>
            <CardMedia
                component="img"
                alt="product"
                height="200"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                {title}
                </Typography>
                <Typography variant="h7">
                S/. {price}
                </Typography>
            </CardContent>
            <ItemCount stock={stock}/>
            <CardActions style={cardActions.theme}>
                {/* Get Item */}
                <Button size="medium" color="primary" variant="contained" onClick={getItem} disabled={disabled} style={getItemButton.theme}>Agregar al carrito</Button>

                {/* See Product Details */}
                <ItemDetailContainer/>  
            </CardActions>
        </Card>
    </>
  )
}
