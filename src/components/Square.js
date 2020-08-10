import React from 'react';

const Square = ({ square, rowIndex, SqIndex }) => {
  return (
    <td attr-i={rowIndex} attr-j={SqIndex}>
      {square}
      {rowIndex}
      {SqIndex}
    </td>
  );
};

export default Square;
