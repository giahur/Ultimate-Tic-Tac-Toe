import * as React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Rules() {
  return (
    <div className="layout">
      <Link to="/homepage" className="button smallButton">
        Back
      </Link>
      <h1>Rules</h1>
      <p>
        {' '}
        Tic-tac-toe with a twist! Ultimate tic-tac-toe takes the traditional 3x3
        board and adds a smaller board in each square.
      </p>
      <p>
        {' '}
        X starts and can play wherever they want. Then, the two players take
        turns moving on the small boards. If you win on a small board, that
        counts as a move on the large board.{' '}
      </p>
      <p>
        {' '}
        Here's where it get tricky. Your move is determined by your opponent's
        previous move. Whichever square they mark determines the board you play
        in. For example, playing in the top right square on any of the smaller
        boards sends your opponent to the top right square on the larger board.
        Their move in that square then determines your next move.{' '}
      </p>
      <p>
        {' '}
        The game ends when a player wins on the large board, or there are no
        moves remaining (tie).{' '}
      </p>
      <p>
        {' '}
        *If a move sends a player to a board that's already been won or tied,
        they may play wherever else they would like.{' '}
      </p>
      <p>
        {' '}
        *If one of the smaller boards ends in a tie, that board will not count
        for either player.
      </p>
      <Link to="/game" className="button">
        Got it!
      </Link>
    </div>
  );
}
