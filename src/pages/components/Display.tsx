import React from 'react';

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div className="display">
      <h1>{value}</h1>
    </div>
  );
};

export default Display;