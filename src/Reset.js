import React, { Component } from 'react';
import './App.css';

class Reset extends Component {
  render() {
    let { restart } = this.props
    return (
      <div>
        <button className="button" onClick={restart}>Reset Game</button>
      </div>
    );
  }
}

export default Reset
