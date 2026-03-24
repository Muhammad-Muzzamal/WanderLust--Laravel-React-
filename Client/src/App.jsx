import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllListings from './pages/AllListings';
import Navbar from './components/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<AllListings />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App