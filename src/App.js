import React from 'react';
import './App.css';
import BigSquare from './BigSquare'

const boxes = 'g04, g10, g11, g12, g20, g44, r80';

function App() {
  return (
    <div className="App">
      <BigSquare boxes={boxes}/>
    </div>
  );
}

export default App;
