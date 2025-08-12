import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled = false }) => {
  // Basic styling - kept it simple for learning purposes
  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: disabled ? '#ccc' : '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.2s' // Added smooth transition
  };

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      data-testid="custom-button"
      style={buttonStyle}
    >
      {children}
    </button>
  );
};

export default Button; 