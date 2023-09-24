import './index.html';
import './audioPlayer.scss';

// HTML components
import { mainHTMLElement } from './components/main/main';
import { footerHTMLSection } from './components/footer/footer';

// self - check
import { audioPlayerSelfCheck } from './audioPlayerSelfCheck/audioPlayerSelfCheck';

// HTML elements
const body = document.querySelector('body');

// nesting components
body.append(mainHTMLElement);
body.append(footerHTMLSection);

// functions realization
window.addEventListener('load', () => {
  
})