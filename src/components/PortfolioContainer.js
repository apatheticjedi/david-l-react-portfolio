import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';
import background from '../assets/video/background.mp4'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // conditionally render current page
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
      
      {/* render background video */}
      <video
      autoPlay
      loop
      muted
      id='video'>
        <source src={background} type='video/mp4' />
      </video>
    </div>
  );
}
