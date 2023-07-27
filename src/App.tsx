import * as React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import BigBoard from './BigBoard'
import Rules from './Rules';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/game" element={<BigBoard />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </BrowserRouter>
  );
}
