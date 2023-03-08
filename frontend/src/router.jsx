import React from "react";
import { Routes, Route, } from "react-router-dom"
import Home from "./pages/Home"
import About from './pages/About/About.jsx';
import Error from './pages/Error';
import Lodgings from "./pages/LodgingPage/LodgingPage";



function Router () {
       return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lodgings/:id" element={<Lodgings />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} /> 
            </Routes>
       )
}

export default Router