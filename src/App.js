import { hot } from 'react-hot-loader/root';
import React from 'react';
import Board from './components/Board';

const App = () => {
  return (
    <div className="tic-tac-toe-game">
      <div className="game-title">tic-tac-toe</div>
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
};

export default hot(App);
