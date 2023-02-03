import Header from "./components/Header"
import Body from "./components/Footer"
import Main from "./components/Main"
import About from "./Pages/About"
import "./css/landing.css"
import {Routes, Route, Link } from 'react-router-dom'
import Notfound from "./Pages/Notfound"
import Project from "./Pages/Project"
import ViewProject from "./Pages/Projects"
import MainLayout from "./Pages/layout/MainLayout"
import ShopLayout from "./Pages/layout/ShopLayout"
import ShopMain from "./components/Shop/ShopMain"


function App() {
  return(
    
    <>
      
    
        <Routes>
            <Route element={<MainLayout />} >
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About/>} />
              <Route path="/project" element={<Project/>} />
              <Route path="/projects/:id" element={<ViewProject/>} />
            </Route>
            <Route element={<ShopLayout />}>
              <Route path="/shop" element={<ShopMain />} />
            </Route>
         

          <Route path="*" element={<Notfound/>} />

        </Routes>
       
     </>
    
  )
}

export default App;