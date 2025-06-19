import React from 'react'
import './App.css';
import { Routes } from 'react-router-dom';
import Home from './Pages/Students/Home.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Routes path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App; 