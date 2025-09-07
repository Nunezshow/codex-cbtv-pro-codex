import React from 'react';
import Login from './components/Login';
import Browse from './components/Browse';
import Player from './components/Player';

export default function App() {
  return (
    <div className="App">
      <h1>Media Hub</h1>
      <Login />
      <Browse />
      <Player />
    </div>
  );
}
