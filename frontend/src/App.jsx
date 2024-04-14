import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './components/Dashboard'


function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>

      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
