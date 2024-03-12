import React, { useState } from 'react';

const Footer = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // State to track collapse status

  const toggleFooter = () => {
    setIsCollapsed(!isCollapsed); // Toggle collapse state on button click
  };

  const hamburgerIconStyle = {
    width: '24px',
    height: '24px',
    position: 'relative',
    cursor: 'pointer',
  };

  const barStyle = {
    width: '4px',
    height: '50%',
    backgroundColor: '#000', // Adjust color as needed
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  };

  return (
    <footer className={`text-gray-600 bg-gray-100 flex justify-end items-center p-4 ${isCollapsed ? 'collapsed' : ''}`}>
      
      <ul className={`list-none mr-4 ${isCollapsed ? 'hidden' : ''}`}>
        <li className="inline mr-4">
          <a href="#" className="text-decoration-none hover:text-gray-700">Features</a>
        </li>
        <li className="inline mr-4">
          <a href="#" className="text-decoration-none hover:text-gray-700">Products</a>
        </li>
        <li className="inline mr-4">
          <a href="#" className="text-decoration-none hover:text-gray-700">FAQs</a>
        </li>
        <li className="inline mr-4">
          <a href="#" className="text-decoration-none hover:text-gray-700">Contact Us</a>
        </li>
      </ul>

      <button
        onClick={toggleFooter}
        id="hamburgerButton"
        className="focus:outline-none"
        style={hamburgerIconStyle}
      >
        <div style={barStyle} />
        <div style={{ ...barStyle, top: '50%' }} />
      </button>

    </footer>
  );
};

export default Footer;
