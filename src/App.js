import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import img from './imgs/first-logo.png';
import './style/App.scss';

import Navbar from './components/navbar';
import Home from './components/home';
import Blog from './components/blog';


function App() {
  return (
    <div className="App">
      <img src={img} className="app-logo" alt="logo"/>
      
      
        <div>
          <Navbar />          
          
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>
          </Routes>
        </div>
      
    </div>
  );
}

export default App;