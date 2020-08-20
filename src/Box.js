import React, { useState } from 'react';
import './Box.css';

function Box(props) {

  const [up, setUp] = useState(false);
  const boxColor = props.color === 'r' ? 'red' : 'green'

  return (
    <div  className="box"
          data-color={boxColor}
          style={{top: props.top * 50 - (up ? 50 : 0),left: props.left * 50}}
          //sets the event listener only in red boxes
          onClick={boxColor === 'red' ? () => setUp(!up): null}>  
      {boxColor === 'red' ? `${up ? 'up': 'down'}` : ''}    
    </div>
  );
}

export default Box;
