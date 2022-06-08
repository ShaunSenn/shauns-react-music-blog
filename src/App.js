import React from 'react';
import { Routes, Route } from 'react-router-dom';

import img from './imgs/first-logo.png';
import './style/App.scss';

import Navbar from './components/navbar';
import Home from './components/parent_pages/home';
import Blog from './components/parent_pages/blog'

export default function App() {
  return (
    <div className="App">
      <img src={img} className="app-logo" alt="logo"/>
      <Navbar />  
        <div className='app-header'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>
          </Routes>
        </div>
    </div>
  );
}