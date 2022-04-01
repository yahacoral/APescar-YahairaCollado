import React from 'react'
import ItemListContainer from '../ItemListContainer'
import { shopTitle, shopSubtitle } from "../../contents";

export default function Shop() {
  
  const shopView = {
    theme: {
      minHeight: 'calc(100vh - 8.5rem)',
      padding: '2rem',
    }
  }

  const title = {
    content: shopTitle,

    theme: {
      fontWeight: '700',
      margin: '0',
    }
  }

  const subtitle = {
    content: shopSubtitle,

    theme: {
      color:'#777777',
      margin: '0.5rem 0 2rem 0',
    }
  }


  return (
    <>
      <div style={shopView.theme}>
        <h1 style={title.theme}>{title.content}</h1>
        <p style={subtitle.theme}>{subtitle.content}</p>
        <ItemListContainer/>
      </div>
    </>
  )
}