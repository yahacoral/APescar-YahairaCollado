import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';
import ItemDetailContainer from './ItemDetailContainer';
import AddItemButton from './AddItemButton'

export default function Item({id,title, price, image, stock}) {

    const cardActions = {
        theme: {
            display: 'block',
            marginBottom: '1rem'
        }
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
                <Typography variant="h6">
                S/. {price}
                </Typography>
                <Typography variant="b2">
                SKU: {id}
                </Typography>
            </CardContent>
            <ItemCount stock={stock}/>
            <CardActions style={cardActions.theme}>
                {/* Add Item Button*/}
                <AddItemButton stock={stock}/>

                {/* See Item Details */}
                <ItemDetailContainer id={id}/>  
            </CardActions>
        </Card>
    </>
  )
}
