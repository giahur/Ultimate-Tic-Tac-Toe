import * as React from 'react';
import { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

import TicTacToe from './TicTacToe';

const BigBoard = () => {
  const [turn, setTurn] = useState('x');
  const [ticTacToes, setTicTacToes] = useState(Array(9).fill(''));
  const [bigWinner, setBigWinner] = useState(null);
  const [nextMove, setNextMove] = useState(null);
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // x and o alternate turns
  function switchTurn() {
    if (turn === 'x') {
      setTurn('o');
    } else {
      setTurn('x');
    }
    return turn;
  }

  // Indicate turns
  const TurnBoard = () => {
    return (
      <div className="turnBoard">
        <span className={`turn xTurn ${turn === 'o' && 'inactive'}`}> X </span>
        <span className={`turn oTurn ${turn === 'x' && 'inactive'}`}> O </span>
      </div>
    );
  };

  // Check array from TicTacToe for 3 won games in a row
  const checkBigWinner = (ticTacToes) => {
    let whoWon;
    for (let i = 0; i < winConditions.length; i++) {
      const [x, y, z] = winConditions[i];
      if (
        ticTacToes[x] &&
        ticTacToes[x] !== 'tie' &&
        ticTacToes[x] === ticTacToes[y] &&
        ticTacToes[y] === ticTacToes[z]
      ) {
        whoWon = ticTacToes[x];
      }
    }
    if (!whoWon && checkForTie(ticTacToes)) {
      whoWon = 'tie';
    }
    if (whoWon && whoWon !== 'tie') {
      setBigWinner(whoWon);
    }
  };

  // Tie if all boards are filled/won/tied with no winner
  const checkForTie = (ticTacToes) => {
    for (let i = 0; i < ticTacToes.length; i++) {
      if (ticTacToes[i] === '') {
        return false;
      }
    }
    return true;
  };
  if (bigWinner === null) {
    checkBigWinner(ticTacToes);
  }

  // Return nine boards with unique key/number prop
  const tttboards = [];
  for (let i = 0; i < 9; i++) {
    tttboards.push(
      <TicTacToe
        turn={turn}
        switchTurn={switchTurn}
        ticTacToes={ticTacToes}
        setTicTacToes={setTicTacToes}
        nextMove={nextMove}
        setNextMove={setNextMove}
        key={i}
        number={i}
      />
    );
  }

  return (
    <div className="layout">
      <Link to="/homepage" className="button smallButton">
        Back
      </Link>
      <TurnBoard />
      {/* Returns winner or tie */}
      {bigWinner ? <h1 className="turn">{bigWinner} Won!</h1> : ''}
      {checkForTie(ticTacToes) && !bigWinner ? <h1>Tie!</h1> : ''}
      <div>
        <div className="big">{tttboards}</div>
        {/* Reset button reloads page, changes text if game is over */}
        <a href="./game">
          <button className="button">
            {' '}
            {bigWinner ? 'Play Again' : 'Reset'}{' '}
          </button>
        </a>
      </div>
    </div>
  );
};
export default BigBoard;
