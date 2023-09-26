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

export function audioPlayerHandler() {
  // classnames and ids
  const audioPlayerClassName = 'audio-player';

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
  let isPlaying = false;

  const commonAudioPathRegExp = /(?<=\/audio\/).+$/gi;
  const commonDomainPathRegExp = /\/src.+$/gi;

  // utilities

  class SongData {
    constructor(songAuthorBand, songName, songAlbumName, songAlbumYear, songAlbumCover) {
      this._songName = songName;
      this._songAuthorBand = songAuthorBand;
      this._songAlbumName = songAlbumName;
      this._songAlbumYear = songAlbumYear;
      this._songAlbumCover = songAlbumCover;
    }

    getSongName() {
      return this._songName;
    }

    getSongAuthorBand() {
      return this._songAuthorBand;
    }

    getSongAlbumName() {
      return this._songAlbumName;
    }

    getSongAlbumYear() {
      return this._songAlbumYear;
    }

    getSongAlbumCover() {
      return this._songAlbumCover;
    }
  }

  const arrayOfSongDataObj = [
    new SongData('Giant', '01. Thunder And Lightning.mp3', 'Time To Burn', '1990', 'Cover.jpg'),
    new SongData('Giant', '04. Stay.mp3', 'Time To Burn', '1990', 'Cover.jpg'),
    new SongData('Axel Rudi Pell', '02. Nasty Reputation.mp3', 'Nasty Reputation', '1991', 'Cover.jpg'),
    new SongData('Motley Crue', '02 - Girls, Girls, Girls.mp3', 'Girls, Girls, Girls', '1987', 'Cover.jpg'),
    new SongData('Asking Alexandria', '10 - Moving On.mp3', 'From Death To Destiny', '2013', 'Cover.png'),
    new SongData('Cinderella', `03. Nobody's Fool [1986 - Night Songs].mp3`, 'Night Songs', '1986', 'Cover.jpg'),
    new SongData('Cinderella', `07. Somebody Save Me [1986 - Night Songs].mp3`, 'Night Songs', '1986', 'Cover.jpg'),
    new SongData('Dokken', `05. Lightnin' Strikes Again.mp3`, 'Under Lock And Key', '1985', 'Cover.jpg'),
    new SongData('Dokken', `14. Walk Away.mp3`, 'Beast From The East', '1988', 'Cover.jpg'),
    new SongData('Giant', `04. I'll See You In My Dreams.mp3`, 'Last Of The Runaways', '1989', 'Cover.jpg'),
    new SongData(`Guns'N'Roses`, `This I love (2008 Chinese Democracy).mp3`, 'Chinese Democracy', '2008', 'Cover.jpg'),
    new SongData(`Cinderella`, `03. Don't Know What You Got (Till It's Gone) [1988 - Long Cold Winter].mp3`, 'Long Cold Winter', '1988', 'Cover.jpg'),
    new SongData(`Helloween`, `05. Forever And One (Neverland).mp3`, 'The Time Of The Oath', '1996', 'Cover.png'),
    new SongData(`Hellowen`, `06. A Tale That Wasn't.mp3`, 'The Legacy World Tour - Live In Sao Paulo', '2007', 'Cover.png'),
    new SongData(`Giant`, `05. Lost In Paradise.mp3`, 'Time To Burn', '1990', 'Cover.jpg'),
    new SongData(`MSG`, `09. Anytime [single edit, bonus] [1989 - Save Yourself].mp3`, 'Save Yourself', '1989', 'Cover.jpg'),
    new SongData(`Skid Row`, `04. Quicksand Jesus [1991 - Slave To The Grind].mp3`, 'Slave To The Grind', '1991', 'Cover.jpg'),
    new SongData(`Steelheart`, `09. She's Gone (Lady) [1990 - Steelheart].mp3`, 'Steelheart', '1990', 'Cover.jpg'),
    new SongData(`Wasp`, `08. The Idol (1992 -The Crimson Idol).mp3`, 'The Crimson Idol', '1992', 'Cover.jpg'),
    new SongData(`Wasp`, `09. Hold On To My Heart (1992 -The Crimson Idol).mp3`, 'The Crimson Idol', '1992', 'Cover.jpg'),
    new SongData(`Stone Sour`, `14. Stone Sour - Wicked Game (Acoustic).mp3`, 'Come What (Ever) May', '2006', 'Cover.jpg'),
    new SongData(`Yngwie J. Malmsteen`, `04. Forever One.mp3`, 'The Seventh Sign', '1994', 'Cover.jpg'),
    new SongData(`Whitesnake`, `05. Til The End Of Time.mp3`, 'Best Ballads', '2014', 'Cover.jpg'),
    new SongData(`Whitesnake`, `09. Sailing Ships.mp3`, 'Best Ballads', '2014', 'Cover.jpg'),
    new SongData(`ария`, `01. Всё, Что Было.mp3`, 'Золотые Баллады', '2011', 'Cover.jpg'),
    new SongData(`Кипелов & Маврин`, `04. Я Свободен.mp3`, 'Смутное Время', '1997', 'Cover.jpg'),
    new SongData(`nobody.one`, `08 - The Duck Song.mp3`, 'head movies', '2010', 'Cover.jpg'),
  ]

  let currentSongDataIndex = 0;

  // e.g. 'http://localhost:8080/src/assets/audio/Giant%201990%20-%20Time%20To%20Burn/01.%20Thunder%20And%20Lightning.6429.mp3' => 'http://localhost:8080'
  function getSongOrCoverBaseUri() {
    // const commonUrl = audioSourse.src.replace(commonDomainPathRegExp, '');
    // return `${commonUrl}/`;
    const commonUri = audioSourse.baseURI;
    return commonUri;
  }

  function getHashedAudioElemPath(objUnhashHashElements, objSongData, objSongDataMethod) {
    // paths relative to .....audio/ folder
    // obj = {unhashedSongRelativePath: hashedSongRelativePath}
    const arrayUnhashedHashedElemPaths = Object.entries(objUnhashHashElements);
    const arrCurrentUnhashedHashedElemPath = arrayUnhashedHashedElemPaths
      // usage of destructurization
      .find(([unhashedElemPath, hashedElemPath]) => unhashedElemPath.includes(objSongData[objSongDataMethod]()));
    const [unhashedElemPath, hashedElemPath] = arrCurrentUnhashedHashedElemPath;
    
    return hashedElemPath;
  }

  function getFullPathForSong() {
    const fullPath = `${getSongOrCoverBaseUri()}${getHashedAudioElemPath(dictionarySongsUncachedCachedFilenames, arrayOfSongDataObj[currentSongDataIndex], `getSongName`)}`;

    const fullPathResolveWhiteSpaces = fullPath.replace(/\s+/gi, '%20');
    
    return fullPathResolveWhiteSpaces;
  }

  function playbackAudio() {
    isPlaying = true;
    buttonPlayInner.classList.add('button_hidden');
    buttonPauseInner.classList.remove('button_hidden');
    audioSourse.play();
  }

  function pausePlaybackAudio() {
    isPlaying = false;
    buttonPlayInner.classList.remove('button_hidden');
    buttonPauseInner.classList.add('button_hidden');
    audioSourse.pause();
  }
  
  function playbackPrevAudio() {
    currentSongDataIndex--;

    if (currentSongDataIndex < 0 ) {
      currentSongDataIndex = arrayOfSongDataObj.length - 1;
    }

    audioSourse.src = getFullPathForSong();
    playbackAudio();
  }
  
  function playbackNextAudio() {
    currentSongDataIndex++;

    if (currentSongDataIndex > arrayOfSongDataObj.length - 1) {
      currentSongDataIndex = 0;
    }

    audioSourse.src = getFullPathForSong();
    playbackAudio();
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

  function handleSongTime() {
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

  function songPlaybackProgress() {
    // songProgress.width = % of the playbacked song
    let currentSongProgressPercent = audioSourse.currentTime / audioSourse.duration * 100;
    songProgress.style.width = `${currentSongProgressPercent}%`;
    songProgressSlider.style.left = `${songProgress.offsetWidth}px`;
  }

  function setManualSongPlaybackProgress(event) {
    // event.offsetX === current Clicked part width of entire closest html element
    // event.target.offsetWidth === the whole width of the target element
    // elem.getBoundingClientRect() === full info about the element dimensions
    audioSourse.currentTime = event.offsetX / event.target.offsetWidth * audioSourse.duration;
  }

  function musicPlayback() {
    if (!isPlaying) {
      playbackAudio();
    } else {
      pausePlaybackAudio();
    }
  }

  function musicStop() {
    pausePlaybackAudio();
    
    // time in seconds! e.g. 0.000;
    audioSourse.currentTime = 0;
    // set time (string) into HTML elements
    songCurrentTime.innerText = changeVisualizationOfSongTime(audioSourse.currentTime);
  }

  // every currentTime song's update
  audioSourse.addEventListener('timeupdate', (event) => {
    handleSongTime();
    songPlaybackProgress();
  })

  // autoplay next song on previous one end
  audioSourse.addEventListener('ended', (event) => {
    playbackNextAudio();
  })

  // realization of music player logic
  audioPlayer.addEventListener('click', (event) => {
    // handle playing music
    if (event.target.closest(`.${buttonPlayClassName}`)) {
      musicPlayback();
    }
    
    // handle stop music
    if (event.target.closest(`.${buttonStopClassName}`)) {
      musicStop();
    }
    
    // handle previous song
    if (event.target.closest(`.${buttonPrevClassName}`)) {
      playbackPrevAudio();
    }
    
    // handle next song
    if (event.target.closest(`.${buttonNextClassName}`)) {
      playbackNextAudio();
    }

    // manual setting song's current time
    if (event.target.closest(`.${songProgressBarClassName}`)) {
      setManualSongPlaybackProgress(event);
    }
  })
}