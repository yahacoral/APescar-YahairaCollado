import React from 'react'
import { lessonsTitle, lessonsSubtitle } from "../../contents";


export default function Lessons() {

  const lessonsView = {
    theme: {
      minHeight: 'calc(100vh - 8.5rem)',
      padding: '2rem',
    }
  }

  const title = {
    content: lessonsTitle,

    theme: {
      fontWeight: '700',
      margin: '0',
    }
  }

  const subtitle = {
    content: lessonsSubtitle,

    theme: {
      color:'#777777',
      margin: '0.5rem 0 2rem 0',
    }
  }

  return (
   <>
    <div style={lessonsView.theme}>
      <h1 style={title.theme}>{title.content}</h1>
      <p style={subtitle.theme}>{subtitle.content}</p>
    </div>
   </>
  )
}