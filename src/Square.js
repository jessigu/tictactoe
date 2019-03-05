import React, { Component } from 'react';
import './App.css';

class Square extends Component {
    handleClick = () => {
        let {index, onClick} = this.props;
        onClick(index);
    }

  render() {
    return (
      <div>
        <div className={"square " + this.props.index} onClick={this.handleClick} > {this.props.value}
        </div>
      </div>
    );
  }
}

export default Square;
