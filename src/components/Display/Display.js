import React from 'react';

const Display = ({ data }) => {
  return <div className="Display">{data.join('')}</div>;
};

export default Display;
