import './additional-styles.css';
import Characters from './Characters';
import Text from './Text';
import ChoiceBox from './ChoiceBox';
import Start from './Start';
import {useState, useEffect} from 'react';
import GameContext from './GameContext';
import startingInfo from './misc/default';

function App() {
  const [gameInfo, setGameInfo] = useState({...startingInfo});
  const [img, setImg] = useState(null);
  const [dialogue,setDialogue] = useState(null);
  const resetCharDia = (info) => {
    if (!info.dialogue) return;
    setImg(info.setImg);
    setDialogue({...info.dialogue.currentChat})
  }
  const nextScene = (scene) => {
    setGameInfo(()=>{
      resetCharDia({...scene});
      return {...scene};
    });
  };
  return (
    <GameContext.Provider value={{gameInfo, setGameInfo}}>
      <div id='game'>
        {!gameInfo.started ? 
        <Start start={nextScene}/> :
        <div id='game-screen' style={{backgroundImage: `url(${gameInfo.backgroundImg})`}}>
          {!gameInfo.choiceMode ? [<Characters img={img} />, <Text dialogue={dialogue} setDialogue={setDialogue} nextScene={nextScene} />] : <ChoiceBox img={img} choices={gameInfo.choices} next={nextScene} />}
        </div>
        }
      </div>
    </ GameContext.Provider>
  );
}

export default App;
