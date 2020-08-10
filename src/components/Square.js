import React from 'react';

const Square = ({ square, onClick, rowIndex, SqIndex }) => {
  return (
    <td attr-i={rowIndex} attr-j={SqIndex} onClick={onClick}>
      {square}
    </td>
  );
};

export default Square;

// {rowIndex}
// {SqIndex}
