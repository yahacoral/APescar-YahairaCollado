import React from 'react'
import Home from "./Views/Home"
import Shop from "./Views/Shop"
import Lessons from "./Views/Lessons"
import Blog from "./Views/Blog"

export default function Mainview() {
  const mainview = {
    theme: {
      display: 'block',
      textAlign: 'center', 
      color: '#1b1b1b'
    }
  }

  return (
    <>
        {/* TODO: Install react router */}
        <div style={mainview.theme}>
          <Home/>
          <Shop/>
          <Lessons/>
          <Blog/>
        </div>
    </>
  )
}
