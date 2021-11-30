import React, {useState, useContext} from 'react';
import Button from './Button';
import Dialogue from './Dialogue';
import GameContext from './GameContext';

function Text ({nextScene, dialogue, setDialogue, reset}) {
    const {gameInfo, setGameInfo} = useContext(GameContext);
    const next = () => {
        if (!dialogue.next) {
            if (!gameInfo.next) return
            nextScene(gameInfo.next);
            return
        }
        return setDialogue(dialogue.next);
    }
    return (
        <div id='text-box'>
            <h2 id='name' style={{color: gameInfo.characters[0].nameColor}}>{dialogue.speaker}</h2>
            <Dialogue text={dialogue.text}/>
            <Button next={next}/>
        </div>
    )
}

export default Text;