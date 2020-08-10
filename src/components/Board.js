import React from 'react';
import Square from './Square';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstOnesTurn: true,
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const newBoard = this.state.board;
    const rowNum = e.target.getAttribute('attr-i');
    const colNum = e.target.getAttribute('attr-j');
    const move = this.state.firstOnesTurn ? '✘' : 'O';
    newBoard[rowNum][colNum] = move;

    console.log(newBoard);
    this.setState({
      firstOnesTurn: !this.state.firstOnesTurn,
      board: newBoard,
    });
  }

  render() {
    return (
      <table>
        <tbody>
          {this.state.board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((square, SqIndex) => (
                <Square
                  square={square}
                  onClick={this.onClick}
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
