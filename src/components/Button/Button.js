import React from 'react';

const Button = ({ onClick, size, value, label }) => {
  return (
    <div
      onClick={onClick}
      className="Button"
      data-size={size}
      data-value={value}
    >
      {label}
    </div>
  );
};

export default Button;
