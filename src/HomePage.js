import * as React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1 className='title'>Ultimate Tic-Tac-Toe</h1>
      <Link to="/game" className="button red">Let's Play!</Link>
      <Link to="/rules" className="button blue">Rules</Link>
    </div>
  );
}
