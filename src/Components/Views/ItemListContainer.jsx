import React from 'react';
import ItemList from '../ItemList';
import { storeTitle, storeSubtitle } from "../../contents";
import styles from '../../styles.module.css';

export default function ItemListContainer() {

  const title = {
    content: storeTitle
  }

  const subtitle = {
    content: storeSubtitle
  }

  return (
    <>
      <div className={styles.view}>
        <h1 className={styles.title}>{title.content}</h1>
        <p className={styles.subtitle}>{subtitle.content}</p>
        <ItemList/>
      </div>
    </>
  )
}