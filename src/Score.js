import React, { Component } from 'react';
import './App.css';

class Score extends Component {
  render() {
    let { xWin, oWin } = this.props
    return (
      <div>
        <h4>Score: <br/>X wins: {xWin}<br/>O wins: {oWin}</h4>
      </div>
    );
  }
}

export default Score;
