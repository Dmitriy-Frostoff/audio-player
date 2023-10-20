// cach entry e.g. ./book1.png : "src/assets/images/png/favorites/book1.56af.png"
// filename : filenameAfterBundleWithHash
const cache = {};

// https://webpack.js.org/guides/dependency-management/#context-module-api
// to demand webpack use all files in folder in the final bundle
function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}
// https://webpack.js.org/guides/dependency-management/ 
importAll(require.context('../../../assets/audio', true, /\.(png|jpeg|jpg|mp3)$/));

function getCashedFilename(cacheObject, keyRegExp, valueRegExp) {
  const uncachedKeysArr = Object.keys(cacheObject).map(key => key.match(keyRegExp)?.toString() ?? '');
  const cachedValuesArr = Object.values(cacheObject).map(value => value.match(valueRegExp)?.toString() ?? '');
  const resultObj = {};
  
  for (let i = 0; i < uncachedKeysArr.length; i++) {
    if (uncachedKeysArr[i]) {
      resultObj[uncachedKeysArr[i]] = cachedValuesArr[i];
    }
  }

  return resultObj;
}

const dictionaryCoversUncachedCachedFilenames = getCashedFilename(cache, /.+\.(png|jpeg|jpg|gif|svg)/gi, /.+\.[a-z\d]+\.(png|jpeg|jpg|gif|svg)/gi);

const dictionarySongsUncachedCachedFilenames = getCashedFilename(cache, /.+\.(mp3)/gi, /.+\.[a-z\d]+\.(mp3)/gi);

// imports of necessary utility functions and data
import {getFullPathForSong, setCurrentSongInfo} from './audioPlayerPathFunctions';
import {playbackPrevAudio, playbackNextAudio, handleSongTime, songPlaybackProgress, setManualSongPlaybackProgress, musicPlayback, playbackAudio, pausePlaybackAudio, musicStop} from './audioPlayerPlaybackFunctions';
import {arrayOfSongDataObj} from './arrayOfSongDataObjects';

export function audioPlayerHandler() {
  // classnames and ids
  const audioPlayerClassName = 'audio-player';

  const bodyBackgroundImageClassName = 'body_background-image';

  const audioPlayerButtonsContainerClassName = 'audio-player-buttons';

  const audioSourseClassName = 'audioSourse';
  const songNameClassName = 'song-name';
  const songAuthorBandClassName = 'song-author-band';
  const songAlbumNameClassName = 'song-album-name';
  const songAlbumYearClassName = 'song-album-year';
  const songAlbumCoverClassName = 'audio-player__background-image';

  const songCurrentTimeClassName = 'song-duration__current';
  const songEntireTimeClassName = 'song-duration__entire';

  const songProgressBarClassName = 'song-progress-bar';
  const songProgressClassName = 'song-progress';
  const songProgressSliderClassName = 'song-progress-slider';

  const buttonPrevClassName = 'button-prev';
  const buttonPlayClassName = 'button-play';
  const buttonPlayInnerClassName = 'button-play-inner';
  const buttonPauseInnerClassName = 'button-pause-inner';
  const buttonStopClassName = 'button-stop';
  const buttonStopInnerClassName = 'button-stop-inner';
  const buttonNextClassName = 'button-next';
  // HTML elements
  const audioPlayer = document.querySelector(`.${audioPlayerClassName}`);

  const bodyBackgroundImage = document.querySelector(`.${bodyBackgroundImageClassName}`);

  const audioPlayerButtonsContainer = document.querySelector(`.${audioPlayerButtonsContainerClassName}`);

  const audioSourse = document.querySelector(`.${audioSourseClassName}`);
  const songName = document.querySelector(`.${songNameClassName}`);
  const songAuthorBand = document.querySelector(`.${songAuthorBandClassName}`);
  const songAlbumName = document.querySelector(`.${songAlbumNameClassName}`);
  const songAlbumYear = document.querySelector(`.${songAlbumYearClassName}`);
  const songAlbumCover = document.querySelector(`.${songAlbumCoverClassName}`);

  const songCurrentTime = document.querySelector(`.${songCurrentTimeClassName}`);
  const songEntireTime = document.querySelector(`.${songEntireTimeClassName}`);

  const songProgressBar = document.querySelector(`.${songProgressBarClassName}`);
  const songProgress = document.querySelector(`.${songProgressClassName}`);
  const songProgressSlider = document.querySelector(`.${songProgressSliderClassName}`);

  const buttonPrev = document.querySelector(`.${buttonPrevClassName}`);
  const buttonPlay = document.querySelector(`.${buttonPlayClassName}`);
  const buttonPlayInner = document.querySelector(`.${buttonPlayInnerClassName}`);
  const buttonPauseInner = document.querySelector(`.${buttonPauseInnerClassName}`);
  const buttonStop = document.querySelector(`.${buttonStopClassName}`);
  const buttonStopInner = document.querySelector(`.${buttonStopInnerClassName}`);
  const buttonNext = document.querySelector(`.${buttonNextClassName}`);
  // abstract data
  
  // use in play/pause functions
  const commonAudioPathRegExp = /(?<=\/audio\/).+$/gi;
  const commonDomainPathRegExp = /\/src.+$/gi;

  const songPathFunctionsData = {
    getSongOrCoverCommonPath: [audioSourse, commonDomainPathRegExp],
    getHashedAudioElemPath: [dictionarySongsUncachedCachedFilenames, arrayOfSongDataObj],
    getHashedAudioCoverElemPath: [dictionaryCoversUncachedCachedFilenames, arrayOfSongDataObj],
    setCurrentSongInfo: [bodyBackgroundImage, songAlbumCover, arrayOfSongDataObj, songName, songAuthorBand, songAlbumName, songAlbumYear],
  }

  const songPlaybackFunctionsData = {
    playbackAudio: [buttonPlayInner, buttonPauseInner, audioSourse],
    playbackPrevNextAudio: [arrayOfSongDataObj, audioSourse, getFullPathForSong, songPathFunctionsData],
  }

  // audio player logic implementation

  // common state variables
  let isPlaying = false;
  let currentSongDataIndex = 0;
  
  // in the one common scope, like that, addEventListener able to change variables,
  // that are set out of it's block scope in the common imperative function wrapper!
  // But it never return anything with `return`!
  // elem.addEventListener = (args) => void;

  // musicPlayback, musicStop = (args) => isPlaying (boolean)
  // playbackNextAudio, playbackPrevAudio = (args) => currentSongDataIndex (number)
  
  // every currentTime song's update
  audioSourse.addEventListener('timeupdate', (event) => {
    setCurrentSongInfo(songPathFunctionsData, currentSongDataIndex);
    handleSongTime(audioSourse, songCurrentTime, songEntireTime);
    songPlaybackProgress(audioSourse, songProgress, songProgressSlider);
  })
  
  // autoplay next song on previous one end
  audioSourse.addEventListener('ended', (event) => {
    currentSongDataIndex = playbackNextAudio(songPlaybackFunctionsData, currentSongDataIndex);
  })
  
  // realization of music player logic
  audioPlayer.addEventListener('click', (event) => {

    // handle playing music
    if (event.target.closest(`.${buttonPlayClassName}`)) {
      isPlaying = musicPlayback(isPlaying, songPlaybackFunctionsData);
    }
    
    // handle stop music
    if (event.target.closest(`.${buttonStopClassName}`)) {
      isPlaying = musicStop(isPlaying, songPlaybackFunctionsData, audioSourse, songCurrentTime);
    }
    
    // handle previous song
    if (event.target.closest(`.${buttonPrevClassName}`)) {
      currentSongDataIndex = playbackPrevAudio(songPlaybackFunctionsData, currentSongDataIndex);
    }
    
    // handle next song
    if (event.target.closest(`.${buttonNextClassName}`)) {
      currentSongDataIndex = playbackNextAudio(songPlaybackFunctionsData, currentSongDataIndex);
    }

    // manual setting song's current time
    if (event.target.closest(`.${songProgressBarClassName}`)) {
      setManualSongPlaybackProgress(audioSourse, event);
    }
  })

  // keyboard events for audio-player
  document.addEventListener('keydown', (event) => {
    // ctrlKey, shiftKey, altKey, metaKey usage === true or false
    // e.g. event.ctrlKey === true || event.ctrlKey === false
    // e.g. won't work event.code === 'ControlLeft'
    // useful https://stackoverflow.com/questions/67016252/how-can-i-listen-for-two-key-press-event-at-a-same-time-in-javascript
    // https://learn.javascript.ru/keyboard-events
    // or just listen to event for 'keydown' or 'keyup'
    if (event.code === 'Space') {
      event.preventDefault();
      isPlaying = musicPlayback(isPlaying, songPlaybackFunctionsData);
    }

    if (event.code === 'ArrowRight' && event.ctrlKey) {
      event.preventDefault();
      currentSongDataIndex = playbackNextAudio(songPlaybackFunctionsData, currentSongDataIndex);
    }

    if (event.code === 'ArrowLeft' && event.ctrlKey) {
      event.preventDefault();
      currentSongDataIndex = playbackPrevAudio(songPlaybackFunctionsData, currentSongDataIndex);
    }

    if (event.code === 'Space' && event.ctrlKey) {
      event.preventDefault();
      isPlaying = musicStop(isPlaying, songPlaybackFunctionsData, audioSourse, songCurrentTime);
    }
  })
}