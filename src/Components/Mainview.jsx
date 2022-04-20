import React from 'react'
import { Routes, Route} from "react-router-dom";
import Home from "./Views/Home"
import ItemListContainer from "./Views/ItemListContainer"
import Lessons from "./Views/Lessons"
import Blog from "./Views/Blog"
import styles from '../styles.module.css'

export default function Mainview() {

  return (
    <div className={styles.mainview}>
      <Routes>
          <Route path="/Inicio" element={<Home />} />
          <Route path="/Tienda" element={<ItemListContainer />} />
          <Route path="/Clases" element={<Lessons />} />
          <Route path="/Blog" element={<Blog />} />
      </Routes>
    </div>
  )
}
