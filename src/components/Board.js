import React from 'react';
import Square from './Square';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPlayersTurn: true,
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    console.log(e.target.getAttribute('attr-j'));
  }

  render() {
    return (
      <table>
        <tbody>
          {this.state.board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((square, SqIndex) => (
                <Square
                  value={square}
                  rowIndex={rowIndex}
                  SqIndex={SqIndex}
                  key={SqIndex}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Board;
