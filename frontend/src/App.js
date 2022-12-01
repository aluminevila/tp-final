import React from 'react';

import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header.js';
import Nav from './components/layout/Nav.js';
import Footer from './components/layout/Footer.js';

import ContactoPage from './pages/ContactoPage'
import GaleriaPage from './pages/GaleriaPage'
import HomePage from './pages/HomePage'
import ServiciosPage from './pages/ServiciosPage'


function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="servicios" element={<ServiciosPage />} />
          <Route path="galeria" element={<GaleriaPage />} />
        </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
