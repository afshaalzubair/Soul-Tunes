import React from 'react';
import './Button.css'; 

const Button = ({ label, link, className }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`custom-button ${className}`} 
    >
      <span className="button-label">{label}</span> 
    </a>
  );
};

export default Button;