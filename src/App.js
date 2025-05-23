import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import SingleProject from '../src/components/pages/SingleProject';
import About from '../src/components/pages/About';
import Home from '../src/components/pages/Home';
import Contact from '../src/components/pages/Contact';
import Projects from '../src/components/pages/Projects';
import Container from "./components/pages/Container";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/styles/globals.css"

import './index.css';
import Footer from "./components/Footer";

function App () {

    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page);
    

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:tagId" element={<Projects />} />
                <Route path="/project/:title" element={<SingleProject />} />
            </Routes>
            <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
            
        </div>
    );

};

export default App;
