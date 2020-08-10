import React from 'react';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td className="1"></td>
            <td className="1"></td>
            <td className="1"></td>
          </tr>
          <tr>
            <td className="2"></td>
            <td className="2"></td>
            <td className="2"></td>
          </tr>
          <tr>
            <td className="3"></td>
            <td className="3"></td>
            <td className="3"></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Board;
