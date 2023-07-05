import React from 'react';

const Display = ({ data }) => {
  const string = data.join('');
  return <div className="Display">{string}</div>;
};

export default Display;
