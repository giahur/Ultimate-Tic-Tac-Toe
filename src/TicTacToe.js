import * as React from 'react';
import { useState } from 'react';
import './style.css';

const TicTacToe = ({
  // Props from BigBoard
  turn,
  switchTurn,
  ticTacToes,
  setTicTacToes,
  nextMove,
  setNextMove,
  number,
}) => {
  const [cells, setCells] = useState(Array(9).fill(''));
  const [inactive, setInactive] = useState(false);
  const [bigMark, setBigMark] = useState('');
  //const [moveMark, setMoveMark] = useState('');
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

  // Check array of cells for 3 in a row
  const checkSmallWinner = (cells) => {
    let whoWon;
    for (let i = 0; i < winConditions.length; i++) {
      const [x, y, z] = winConditions[i];
      if (cells[x] && cells[x] === cells[y] && cells[y] === cells[z]) {
        whoWon = cells[x];
      }
    }
    if (!whoWon && checkForTie(cells)) {
      whoWon = 'tie';
    }
    if (whoWon) {
      setInactive(true);
      setBigMark(whoWon + 'SmallWin');
      const newTicTacToes = [...ticTacToes];
      newTicTacToes[number] = whoWon;
      setTicTacToes(newTicTacToes);
    }
  };

  // Tie if all cells are filled with no winner
  const checkForTie = (cells) => {
    for (let i = 0; i < cells.length; i++) {
      if (cells[i] === '') {
        return false;
      }
    }
    return true;
  };

  // Checks move index, sets correct board active
  const checkNextMove = () => {
    if (!nextMove || nextMove === number || ticTacToes[nextMove] !== '') {
      //setMoveMark(turn + 'Turn');
      return true;
    }
    //setMoveMark('');
    return false;
  };

  // Only marks if cell is empty, board is in play
  const handleClick = (num) => {
    if (cells[num] !== '' || inactive || !checkNextMove()) {
      return;
    }
    let newCells = [...cells];
    newCells[num] = turn;
    switchTurn();
    checkSmallWinner(newCells);
    setNextMove(num);
    setCells(newCells);
  };

  // Displays correct mark
  const Cell = ({ num }) => {
    const style = cells[num] === 'x' ? 'square x' : 'square o';
    return (
      <td className={style} onClick={() => handleClick(num)}>
        {cells[num]}
      </td>
    );
  };

  return (
    <div className={`container ${bigMark}`}>
      {' '}
      {/*${moveMark}`}>*/}
      <table>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default TicTacToe;
