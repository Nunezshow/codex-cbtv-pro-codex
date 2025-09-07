import React from 'react';

export default function Player() {
  return (
    <div>
      <h2>Player</h2>
      <video controls width="600">
        <source src="https://example.com/sample.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
