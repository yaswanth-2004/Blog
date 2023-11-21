import { useEffect, useState } from 'react'
import { BrowserRouter as  Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import SinglePost from './pages/SinglePost'
import axios from "axios"




function App()
{

  return(
    <Router>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<SinglePost/>} path='/singlePost'/>
    </Routes>
    </Router>


  
  )

 
  
}

export default App
