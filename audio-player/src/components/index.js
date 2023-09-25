import './index.html';
import './audioPlayer.scss';

// HTML components
import { mainHTMLElement } from './components/main/main';
import { audio_playerHTMLSection } from './components/audio-player/audioPlayerComponent';
import { footerHTMLSection } from './components/footer/footer';

// self - check
import { audioPlayerSelfCheck } from './audioPlayerSelfCheck/audioPlayerSelfCheck';

// logic and utilities
import { audioPlayerHandler } from './components/audio-player/audioPlayerLogic';

// HTML elements
const body = document.querySelector('body');

// nesting components
body.append(mainHTMLElement);
const main = document.querySelector('main');

main.append(audio_playerHTMLSection);

body.append(footerHTMLSection);

// functions realization
window.addEventListener('load', () => {
  audioPlayerHandler();
})