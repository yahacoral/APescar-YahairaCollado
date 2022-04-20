import React from 'react'
import Item from "./Item"
import { productArray } from "../Products";
import styles from '../styles.module.css'

export default function ItemList() {

  return (
    <>
        <div className={styles.itemList}>
          {productArray.map(( {id, image, title, price, stock } ) => (
            <Item
              {...{id, image, title, price, stock}}
            />
          ))}
        </div>
    </>
  )
}
