import Chat from '/Users/sfederma/Documents/vn-prac/vn/src/models/chat.js';
import DialogueList from '/Users/sfederma/Documents/vn-prac/vn/src/models/dialogueLst.js';
import forest from '/Users/sfederma/Documents/vn-prac/vn/src/img/BG/forest-path.png';
import c1 from '/Users/sfederma/Documents/vn-prac/vn/src/img/character/Girl/girl.js';
import scene3 from './scene3';

const t1 = new Chat('i like blue',c1.name,1000);
const t2 = new Chat('i like green also',c1.name,1000);
const t3 = new Chat('i really like cats',c1.name,1000);
const d1 = new DialogueList([t1,t2,t3]);

const scene2 = {
    characters: [c1],
    setImg: c1.images['no'],
    dialogue: d1,
    backgroundImg: forest,
    started: true,
    choiceMode: false,
    choices: null,
    nextSceneDelay: null,
    BGM: null,
    next: scene3
}

export default scene2;