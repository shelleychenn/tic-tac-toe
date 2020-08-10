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
      message: null,
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

    let x = [];
    let o = [];
    for (let i = 0; i < this.state.board.length; i++) {
      for (let j = 0; j < this.state.board[i].length; j++) {
        if (this.state.board[i][j] === '✘') {
          x.push([i, j]);
        } else if (this.state.board[i][j] === 'O') {
          o.push([i, j]);
        }
      }
    }

    console.log('x', x);
    console.log('o', o);

    if (
      x.length >= 3 &&
      ((x[0][0] === x[1][0] && x[1][0] === x[2][0]) ||
        (x[0][1] === x[1][1] && x[1][1] === x[2][1]) ||
        (x[0][0] === x[0][1] && x[1][0] === x[1][1] && x[2][0] === x[2][1]) ||
        (x[0][0] + x[0][1] === 2 &&
          x[1][0] + x[1][1] === 2 &&
          x[2][0] + x[2][1] === 2))
    ) {
      this.setState({
        message: 'Player 1 won!',
      });
    }

    if (
      o.length >= 3 &&
      ((o[0][0] === o[1][0] && o[1][0] === o[2][0]) ||
        (o[0][1] === o[1][1] && o[1][1] === o[2][1]) ||
        (o[0][0] === o[0][1] && o[1][0] === o[1][1] && o[2][0] === o[2][1]) ||
        (o[0][0] + o[0][1] === 2 &&
          o[1][0] + o[1][1] === 2 &&
          o[2][0] + o[2][1] === 2))
    ) {
      this.setState({
        message: 'Player 2 won!',
      });
    }

    console.log('message', this.state.message);
    this.setState({
      firstOnesTurn: !this.state.firstOnesTurn,
      board: newBoard,
    });
  }

  render() {
    return (
      <>
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
        {this.state.message}
      </>
    );
  }
}

export default Board;
