import React from 'react';
import { lessonsTitle, lessonsSubtitle } from "../../contents";
import styles from '../../styles.module.css';


export default function Lessons() {

  const title = {
    content: lessonsTitle
  }

  const subtitle = {
    content: lessonsSubtitle
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