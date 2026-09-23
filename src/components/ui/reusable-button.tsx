
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const ReusableButton: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold transition-all duration-300 ${className}`}
  >
    {children}
  </button>
);
