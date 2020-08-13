import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <div className="board-square" onClick={onClick}>
      {value}
    </div>
  );
};

export default Square;
