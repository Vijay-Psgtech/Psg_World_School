import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Index from './pages/Index';
import About from './pages/About/About';
import Academics from './pages/Academics/Academics';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="about" element={<About />} />
          <Route path="academics" element={<Academics />} />
        </Route>
      </Routes>
      
      
    </BrowserRouter>
  )
}

export default App
