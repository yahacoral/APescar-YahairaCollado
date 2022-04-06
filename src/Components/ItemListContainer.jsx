import React from 'react'
import ProductCard from "./ProductCart"
import { productArray } from "../Products";

export default function ItemListContainer() {

  const itemList = {
    theme: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr'
    }
  }

  return (
    <>
        <div style={itemList.theme}>
          {productArray.map(( {image, title, price, description, stock } ) => (
            <ProductCard
              {...{image, title, price, description, stock}}
            />
          ))}
        </div>
    </>
  )
}
