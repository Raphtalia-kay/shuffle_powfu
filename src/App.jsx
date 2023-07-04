import React from 'react'
import "./App.css"
import Hero from './components/Hero'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <>
   <Routes>
    <Route path="/" element={ <Home/>}/>
   </Routes>
    </>
  )
}

export default App