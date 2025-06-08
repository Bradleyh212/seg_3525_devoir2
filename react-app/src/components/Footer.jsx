import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="text-white text-center py-3" style={{ backgroundColor: '#022004' }}>
      <p className="mb-2">2025 “Royal Beauty Salon” All Rights Reserved</p>
      <button 
        onClick={handleScrollTop} 
        className="btn" 
        style={{ color: 'white' }}
      >
        <FaArrowUp className="me-2" /> Back to Top
      </button>
    </footer>
  );
}

export default Footer;