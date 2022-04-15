import React from 'react'
import { Routes, Route} from "react-router-dom";
import Home from "./Views/Home"
import ItemListContainer from "./Views/ItemListContainer"
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
    <div style={mainview.theme}>
      <Routes>
          <Route path="/Inicio" element={<Home />} />
          <Route path="/Tienda" element={<ItemListContainer />} />
          <Route path="/Clases" element={<Lessons />} />
          <Route path="/Blog" element={<Blog />} />
      </Routes>
    </div>
  )
}
