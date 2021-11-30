import {Choice, Choices} from '/Users/sfederma/Documents/vn-prac/vn/src/models/choices.js';
import forest from '/Users/sfederma/Documents/vn-prac/vn/src/img/BG/forest-path.png';
import c1 from '/Users/sfederma/Documents/vn-prac/vn/src/img/character/Girl/girl.js';
import scene1 from './scene1';

const ch1 = new Choice('Yes',function(){
    alert('game over');
});
const ch2 = new Choice('No',null);
const ch3 = new Choice('Maybe',null);
const lst = new Choices([ch1,ch2,ch3]);

const scene3 = {
    characters: [c1],
    setImg: c1.images['cheeky'],
    dialogue: null,
    backgroundImg: forest,
    started: true,
    choiceMode: true,
    choices: lst.choices,
    nextSceneDelay: null,
    BGM: null,
    next: scene1
}

export default scene3;