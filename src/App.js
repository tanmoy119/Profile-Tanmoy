import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Nav from './components/Nav';
import Home from './components/Home';
import ProfileImg from './components/ProfileImg';
import About from './components/About';
import Slider from './components/slider/Slider';
import Product from './components/Product';


function App() {
  return (
    <Router>
             {/* <Nav/> */}
      <Routes>
 
        <Route path='/' element={<Home />} />
        <Route path='/PRODUCT' element={<Product/>} />
        <Route path='/ABOUT' element={<About/>} />
        <Route path='/slider' element={<Slider/>} />

      </Routes>
    </Router>
    
  );
}

export default App;
