import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Query from './pages/query.jsx';
import Product from './pages/product.jsx';
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/query" element={<Query />} />
      <Route path="/products/:id" element={<Product />} />
    </Routes>
  </BrowserRouter>,

);
