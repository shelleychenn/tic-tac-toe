import { hot } from 'react-hot-loader/root';
import React from 'react';
import Board from './components/Board';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tic-tac-toe-app">
        <div className="app-title">tic-tac-toe</div>
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

export default hot(App);
