import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main';
import Room from './room';
import Interview from './interview';
import Piece from './piece';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/room" element={<Room />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/piece" element={<Piece />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
