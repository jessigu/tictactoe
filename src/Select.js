import React, { Component } from 'react';
import './App.css';

class Select extends Component {
  render() {
      let {onClick, turn, onSelect} = this.props;
    return (
      <div>
        <button className="button" onClick={onSelect} disabled={turn} >Pick X</button>
        <button className="button" onClick={onClick} disabled={turn} >Pick O</button>
      </div>
    );
  }
}

export default Select;
