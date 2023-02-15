import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from './pages/About';
import Error from './pages/Error';
import Lodgings from "./pages/LodgingPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Header/>
            <Routes>
            <Route path="/" element={<Home />} />
                <Route path="/lodgings/:id" element={<Lodgings />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} /> 
            </Routes>
          <Footer />
      </BrowserRouter>
  </React.StrictMode>
);