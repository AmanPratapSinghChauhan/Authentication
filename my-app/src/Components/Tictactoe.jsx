import React, { useState, useEffect } from "react";
import "./Tictactoe.css";
import Header from "./Header";
import Footer from "./Footer";

function Tictactoe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerX, setIsPlayerX] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const checkWinner = (board) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const isBoardFull = (board) => {
    return board.every((cell) => cell !== null);
  };

  const handleCellClick = (index) => {
    if (gameOver || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isPlayerX ? "X" : "O";
    setBoard(newBoard);
    setIsPlayerX(!isPlayerX);
  };

  useEffect(() => {
    const winner = checkWinner(board);
    if (winner) {
      setGameOver(true);
    } else if (isBoardFull(board)) {
      setGameOver(true);
    } else if (!isPlayerX) {
      // If it's the computer's turn, make a random move after a short delay
      const computerMoveTimer = setTimeout(makeComputerMove, 500);
      return () => clearTimeout(computerMoveTimer);
    }
  }, [board, isPlayerX]);

  const makeComputerMove = () => {
    if (!gameOver) {
      const emptyCells = board.map((cell, index) => (cell === null ? index : null)).filter((index) => index !== null);
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const computerMoveIndex = emptyCells[randomIndex];

      const newBoard = [...board];
      newBoard[computerMoveIndex] = "O";
      setBoard(newBoard);
      setIsPlayerX(true);
    }
  };

  const renderCell = (index) => {
    return (
      <div className="cell" onClick={() => handleCellClick(index)}>
        {board[index]}
      </div>
    );
  };

  const renderStatus = () => {
    const winner = checkWinner(board);
    if (winner) {
      return `Winner: ${winner}`;
    } else if (isBoardFull(board)) {
      return "It's a draw!";
    } else {
      return `Next Player: ${isPlayerX ? "X" : "O"}`;
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerX(true);
    setGameOver(false);
  };

  return (
    <>
      <Header/>
      <div className="tic-tac-toe-container">

     
   
    <div className="App">
      <div className="app-item">
      <h1>Tic Tac Toe</h1>
      </div>
      <div className="app-item">
      <div className="board">
        {board.map((cell, index) => (
          <React.Fragment key={index}>{renderCell(index)}</React.Fragment>
        ))}
      </div>

      </div>
      <div className="app-item">
      <div className="status">{renderStatus()}</div>
      {gameOver && <button onClick={restartGame}>Restart</button>}
    </div>

      </div>
      
    </div>
    <Footer/>
    </>
  );
}

export default Tictactoe;
