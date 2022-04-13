import React from 'react'
import ItemCount from './ItemCount'
import AddItemButton from './AddItemButton'

export default function ItemDetail({item}) {

  const grid = {
    theme: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
    }
  }

  const imageStyled = {
    theme: {
      height: '28.5rem',
      width: '30rem',
      objectFit: 'cover',
    }
  }

  return (
    <>
      <div style={grid.theme}>
        <img src={item.image} alt="item thumbnail" style={imageStyled.theme}/>
        <div>
          <span>
            <p><b>{item.category}</b></p>
            <p>SKU:{item.id}</p>
          </span>
          <h1>{item.title}</h1>
          <h3>Precio: S/.{item.price}</h3>
          <p>{item.description}</p>
          <ItemCount/>
          {/* Add Item */}
          <AddItemButton stock={item.stock}/>
        </div>
      </div>
    </>
  )
}
