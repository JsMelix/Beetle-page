// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Trailer from './components/Trailer'; 
import HamburgerMenu from './components/HamburgerMenu'; 

function App() {
  return (
    <div className="App">
      <Header />
      <HamburgerMenu />
      <MainContent />
      <Footer />
      <Gallery />
      <Trailer /> 
    </div>
  );
}

export default App;
