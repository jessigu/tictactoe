import React, { Component } from 'react';
import './App.css';
import Square from './Square';
import Reset from './Reset';
import Winner from './Winner';
import Select from './Select';
import Score from './Score';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            board: new Array(9).fill(''),
            turn: null,
            winner: null,
            winning: [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
            ],
            oWin: 0,
            xWin: 0
        }
    }
//refactor into multiple functions... DRY + 1 task/function
    playGame = (index) => {
        const {board, turn, winner, winning, xWin, oWin} = this.state;
        if (turn === null) {
            return;
        }
        if(winner === null){
            if(board[index] === "") {
             board[index] = turn
             this.setState({board: board, turn: (turn === 'X') ? 'O' : 'X'})
            }
            for(let i = 0; i < winning.length; i++){
              //get rid of for loop
              //move winning array to function or leave in state?
              const [a, b, c] = winning[i];
                if(board[a] && board[a] === board[b] && board[a] === board[c]){
                    turn === 'X' ? this.setState({xWin: xWin+1}) : this.setState({oWin: oWin+1})
                    this.setState({winner: turn});
                }
            }
                if (board.join('').length === 9){
                this.setState({winner: 'draw'})
            }
        }
    }

    resetGame = () => {
        this.setState({
                board: new Array(9).fill(''),
                turn: null,
                winner: null});
    }

    selectIconX = () => {
        this.setState({turn: 'X'});
    }
    selectIconO = () => {
        this.setState({turn: 'O'});
    }

  render() {
    const { board, turn, winner, xWin, oWin } = this.state
    return (
      <div className="container">
        <div className="menu" >
            <h1>Tic-Tac-Toe</h1>
            <h5>Please select your player: X or O</h5>
            <Select onClick={this.selectIconO} onSelect={this.selectIconX} turn={turn} disabled={turn}
            />
        </div>
        <div>
        {board.map((value,index) => {
        return (
            <Square
                key={index}
                index={index}
                value={value}
                turn={turn}
                onClick={this.playGame}
                />
            )
        })}
        </div>
        <div className='menu'>
            <Winner
            winner = {winner}
            />
            <Reset restart={this.resetGame} win={winner}/>
            <Score xWin={xWin} oWin={oWin}/>
        </div>
      </div>
    );
  }
}

export default App;
