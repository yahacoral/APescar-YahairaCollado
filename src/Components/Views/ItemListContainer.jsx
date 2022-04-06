import React from 'react'
import ItemList from '../ItemList'
import { storeTitle, storeSubtitle } from "../../contents";

export default function ItemListContainer() {
  
  const storeView = {
    theme: {
      minHeight: 'calc(100vh - 8.5rem)',
      padding: '2rem',
    }
  }

  const title = {
    content: storeTitle,

    theme: {
      fontWeight: '700',
      margin: '0',
    }
  }

  const subtitle = {
    content: storeSubtitle,

    theme: {
      color:'#777777',
      margin: '0.5rem 0 2rem 0',
    }
  }


  return (
    <>
      <div style={storeView.theme}>
        <h1 style={title.theme}>{title.content}</h1>
        <p style={subtitle.theme}>{subtitle.content}</p>
        <ItemList/>
      </div>
    </>
  )
}