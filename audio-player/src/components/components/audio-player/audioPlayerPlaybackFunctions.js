export function playbackAudio(buttonPlayInner, buttonPauseInner, audioSourse) {
  buttonPlayInner.classList.add('button_hidden');
  buttonPauseInner.classList.remove('button_hidden');
  audioSourse.play();
}

export function pausePlaybackAudio(buttonPlayInner, buttonPauseInner, audioSourse) {
  buttonPlayInner.classList.remove('button_hidden');
  buttonPauseInner.classList.add('button_hidden');
  audioSourse.pause();
}

function changeVisualizationOfSongTime(timeInSeconds) {
  function getMinutes(timeInSeconds) {
    // 263.183673s => 4 minutes (precisely 4.38639455 minutes)
    return Math.trunc(timeInSeconds / 60);
  }
  
  function getRoundedTwoSignsSeconds(timeInSeconds) {
    // 263.183673s => the remainder of minutes is 23 seconds (precisely 23.183673 seconds)
    // e.g. 3 seconds => 03 seconds;
    return `${Math.trunc(timeInSeconds % 60)}`.padStart(2, '0');
  }
  
  return `${getMinutes(timeInSeconds)}:${getRoundedTwoSignsSeconds(timeInSeconds)}`;
}

// imperative wrapper functions 

export function playbackPrevAudio(songPlaybackFunctionsData, currentSongDataIndex) {
  const [arrayOfSongDataObj, audioSourse, getFullPathForSong, songPathFunctionsData] = songPlaybackFunctionsData.playbackPrevNextAudio;

  currentSongDataIndex--;

  if (currentSongDataIndex < 0 ) {
    currentSongDataIndex = arrayOfSongDataObj.length - 1;
  }

  audioSourse.src = getFullPathForSong(songPathFunctionsData, currentSongDataIndex);
  playbackAudio(...songPlaybackFunctionsData.playbackAudio);

  return currentSongDataIndex;
}

export function playbackNextAudio(songPlaybackFunctionsData, currentSongDataIndex) {
  const [arrayOfSongDataObj, audioSourse, getFullPathForSong, songPathFunctionsData] = songPlaybackFunctionsData.playbackPrevNextAudio;

  currentSongDataIndex++;

  if (currentSongDataIndex > arrayOfSongDataObj.length - 1) {
    currentSongDataIndex = 0;
  }

  audioSourse.src = getFullPathForSong(songPathFunctionsData, currentSongDataIndex);
  playbackAudio(...songPlaybackFunctionsData.playbackAudio);
  
  return currentSongDataIndex;
}

export function handleSongTime(audioSourse, songCurrentTime, songEntireTime) {
  // time in seconds! e.g. 0.000;
  let currentSongTime = audioSourse.currentTime;
  // time in seconds! e.g. 263.183673;
  let entireSongTime = audioSourse.duration;

  // format song time, string
  currentSongTime = changeVisualizationOfSongTime(currentSongTime);
  entireSongTime = changeVisualizationOfSongTime(entireSongTime);

  // fix problem when audio.duration is not loaded yet
  // it will display "NaN:NaN"
  if (entireSongTime === "NaN:NaN") {
    entireSongTime = '0:00';
  } 

  // set time (string) into HTML elements
  songCurrentTime.innerText = currentSongTime;
  songEntireTime.innerText = entireSongTime;
}

export function songPlaybackProgress(audioSourse, songProgress, songProgressSlider) {
  // songProgress.width = % of the playbacked song
  let currentSongProgressPercent = audioSourse.currentTime / audioSourse.duration * 100;
  songProgress.style.width = `${currentSongProgressPercent}%`;
  songProgressSlider.style.left = `${songProgress.offsetWidth}px`;
}

export function setManualSongPlaybackProgress(audioSourse, event) {
  // event.offsetX === current Clicked part width of entire closest html element
  // event.target.offsetWidth === the whole width of the target element
  // elem.getBoundingClientRect() === full info about the element dimensions
  audioSourse.currentTime = event.offsetX / event.target.offsetWidth * audioSourse.duration;
}

export function musicPlayback(isPlaying, songPlaybackFunctionsData) {
  if (!isPlaying) {
    playbackAudio(...songPlaybackFunctionsData.playbackAudio);
    isPlaying = true;
    return isPlaying;
  } else {
    pausePlaybackAudio(...songPlaybackFunctionsData.playbackAudio);
    isPlaying = false;
    return isPlaying;
  }
}

export function musicStop(isPlaying, songPlaybackFunctionsData, audioSourse, songCurrentTime) {
  pausePlaybackAudio(...songPlaybackFunctionsData.playbackAudio);
  
  // time in seconds! e.g. 0.000;
  audioSourse.currentTime = 0;
  // set time (string) into HTML elements
  songCurrentTime.innerText = changeVisualizationOfSongTime(audioSourse.currentTime);
  isPlaying = false;
  return isPlaying;
}