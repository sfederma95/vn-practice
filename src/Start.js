import React, {useContext} from 'react';
import GameContext from './GameContext';

function Start({start}) {
  const {gameInfo, setGameInfo} = useContext(GameContext);
  return (
    <div id='start'>
        <h1 onClick={()=>{start({...gameInfo.next})}}>Start</h1>
    </div>
  );
}

export default Start;
