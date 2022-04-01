import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductCart({title, description, price, image}) {
    const shopButton = {
        theme: {
          margin: '0 auto',
        }
    }

  return (
    <>
        <Card sx={{ maxWidth: 345, margin: '1rem' }}>
            <CardMedia
                component="img"
                alt="product"
                height="150"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {description}
                </Typography>
                <Typography variant="h7">
                S/. {price}
                </Typography>
            </CardContent>
            <CardActions style={{paddingBottom:'2rem'}}>
                <Button size="small" color="error" variant="contained" style={shopButton.theme} >Comprar</Button>
            </CardActions>
        </Card>
    </>
  )
}
