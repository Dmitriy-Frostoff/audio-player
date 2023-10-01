import { htmlCreateComponentHelper } from '../../utilities/htmlCreateComponentHelper';

import audio_playerHTMLTemplate from './audio-player.html';

// project entire styles
import '../../audioPlayer.scss';

const audio_playerHTMLSection = htmlCreateComponentHelper(audio_playerHTMLTemplate);

export { audio_playerHTMLSection };