import React, { useState } from 'react';
import { Button, Alert } from 'react-native';

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Projects';
import Contact from './pages/Contact';
import "../assets/styles/globals.css"


export default function Container() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  // This method renders the appropriate page component based on the value of currentPage state.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* TODO: Add a comment describing what we are passing as props */}
      {/* We are passing the currentPage state and handlePageChange function as props to the NavTabs component. */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* TODO: Add a comment explaining what is happening on the following line */}
      {/* The renderPage function is called here to render the appropriate page component based on the value of currentPage state. */}
      <main>
      {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
