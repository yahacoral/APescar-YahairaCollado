import React from 'react';
import { blogTitle, blogSubtitle } from "../../contents";
import styles from '../../styles.module.css';

export default function Blog() {

  const title = {
    content: blogTitle
  }

  const subtitle = {
    content: blogSubtitle
  }

  return (
    <>
      <div className={styles.view}>
        <h1 className={styles.title}>{title.content}</h1>
        <p className={styles.subtitle}>{subtitle.content}</p>
      </div>
   </>
  )
}