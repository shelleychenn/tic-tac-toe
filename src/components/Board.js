import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      playerOneTurn: true,
    };
    this.getWinner = this.getWinner.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderSquare = this.renderSquare.bind(this);
  }

  getWinner(squares) {
    const winningResults = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];

    for (let i = 0; i < winningResults.length; i++) {
      const [a, b, c] = winningResults[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  handleClick(i) {
    const newSquares = this.state.squares.slice();
    if (this.getWinner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares[i] = this.state.playerOneTurn ? '✗' : 'O';

    this.setState({
      squares: newSquares,
      playerOneTurn: !this.state.playerOneTurn,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => {
          this.handleClick(i);
        }}
      />
    );
  }

  render() {
    const winner = this.getWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner is ' + winner + '!';
    } else {
      const nextPlayer = this.state.playerOneTurn ? '✗' : 'O';
      status = 'Next Player: ' + nextPlayer;
    }

    return (
      <div>
        <div className="game-status">{status}</div>
        <div className="board-rows">
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
