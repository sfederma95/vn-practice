import React, {useState, useContext} from 'react';
import Portrait from './Portrait';
import GameContext from './GameContext';

function Characters ({img}) {
    return (
        <div id='character-container'>
            <Portrait alt="Girl" src={img}/>
        </div>
    )
}

export default Characters;