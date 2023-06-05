import React, { Component } from "react";
import "./App.css";

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(""),
      currentPlayer: "X",
      winner: null,
    };
  }

  handleClick(index) {
    if (!this.state.winner && this.state.board[index] === "") {
      const newBoard = [...this.state.board];
      newBoard[index] = this.state.currentPlayer;

      this.setState({
        board: newBoard,
        currentPlayer: this.state.currentPlayer === "X" ? "O" : "X",
      });

      this.checkWinner(newBoard);
    }
  }

  checkWinner(board) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
        this.setState({ winner: board[a] });
        break;
      }
    }
  }

  resetGame() {
    this.setState({
      board: Array(9).fill(""),
      currentPlayer: "X",
      winner: null,
    });
  }

  renderSquare(index) {
    return (
      <button className="square" onClick={() => this.handleClick(index)}>
        {this.state.board[index]}
      </button>
    );
  }

  render() {
    let status;
    if (this.state.winner) {
      status = `Winner: ${this.state.winner}`;
    } else {
      status = `Next Player: ${this.state.currentPlayer}`;
    }

    return (
      <div className="game">
        <div className="game-board">
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
        <div className="game-info">
          <div>{status}</div>
          <button className="reset-button" onClick={() => this.resetGame()}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default TicTacToe;
