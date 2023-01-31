import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Home from './Home';
import Items from './Item';
import Navbar from './Navbar';
import Explore from './Pages/Explore';
import SecondaryExplore from './Pages/SecondaryExplore';
import './homePage.css';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='buy' element={<Explore />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='sec' element={<SecondaryExplore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
