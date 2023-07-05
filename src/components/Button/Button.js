import React from 'react';

const Button = (props) => {
  const { onClick, size, value, label } = props;

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
