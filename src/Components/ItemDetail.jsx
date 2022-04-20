import React from 'react'
import ItemCount from './ItemCount'
import AddItemButton from './AddItemButton'
import styles from '../styles.module.css'

export default function ItemDetail({item}) {

  return (
    <>
      <div className={styles.itemDetail}>
        <img src={item.image} alt="item thumbnail" className={styles.itemDetailImg}/>
        <div className={styles.itemDetailInfo}>
          <span className={styles.itemDetailHeader}>
            <p><b>{item.category}</b></p>
            <p>SKU:{item.id}</p>
          </span>
          <h1>{item.title}</h1>
          <h3>Precio: S/.{item.price}</h3>
          <p>{item.description}</p>
          <ItemCount stock={item.stock}/>
          <AddItemButton/>
        </div>
      </div>
    </>
  )
}
