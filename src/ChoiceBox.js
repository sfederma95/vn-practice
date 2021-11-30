import React from 'react';
import Choice from './Choice';
import Portrait from './Portrait';
import { v4 as uuidv4 } from 'uuid';

function ChoiceBox({img,choices, next}) {
  const buttonClick = (e) => {
    console.log(e.target);
  }
  const chContainer = choices.map((ch)=>{
    return <Choice key={uuidv4()} onClick={buttonClick} value={ch.label}/>
  })
  return (
    <div id='choice-box'>
        <div id='choices-portrait'>
            <Portrait alt="Girl" src={img}/>
        </div>
        <div id="choice-container">
            {chContainer}
        </div>
    </div>
  );
}

export default ChoiceBox;
