import React from 'react';
import Box from './Box'
import './BigSquare.css';

function renderBoxes(boxes) {
  return boxes.split(', ').map((box, index) => {
    const [color, top, left] = box.split('');
    return <Box top={top} left={left} color={color} key={index}/>
  })
}

function BigSquare(props) {
  return (
    <div className="bigSquare">
      {props.boxes && renderBoxes(props.boxes)}
    </div>
  );
}

export default BigSquare;
