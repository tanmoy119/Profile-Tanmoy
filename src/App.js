import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Nav from './components/Nav';
import Home from './components/Home';
import ProfileImg from './components/ProfileImg';
import About from './components/About';


function App() {
  return (
    <Router>
             {/* <Nav/> */}
      <Routes>
 
        <Route path='/' element={<Home />} />
        <Route path='/PRODUCT' element={<ProfileImg/>} />
        <Route path='/ABOUT' element={<About/>} />

      </Routes>
    </Router>
    
  );
}

export default App;
