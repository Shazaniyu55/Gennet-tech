import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './components/home';
import BookingSection from './components/booking';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/book" element={<BookingSection/>} />
    </Routes>
    </>
  )
}

export default App
