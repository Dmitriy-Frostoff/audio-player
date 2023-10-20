function getSongOrCoverCommonPath(audioSourse, commonDomainPathRegExp) {
  // .baseUri not a friend of yours! It leads to wrong path
  // e.g. https://rolling-scopes-school.github.io/dmitriy-frostoff-JSFEPRESCHOOL2023Q2/audio-player/index.html
  // I need https://rolling-scopes-school.github.io/dmitriy-frostoff-JSFEPRESCHOOL2023Q2/audio-player/
  const commonUrl = audioSourse.src.replace(commonDomainPathRegExp, '');
  return `${commonUrl}/`;
}

function getHashedAudioElemPath(objUnhashHashElements, objSongData, objSongDataMethod, currentSongDataIndex) {
  // paths relative to .....audio/ folder
  // obj = {unhashedSongRelativePath: hashedSongRelativePath}
  const arrayUnhashedHashedElemPaths = Object.entries(objUnhashHashElements);
  const arrCurrentUnhashedHashedElemPath = arrayUnhashedHashedElemPaths
    // usage of destructurization
    .find(([unhashedElemPath, hashedElemPath]) => unhashedElemPath.includes(objSongData[currentSongDataIndex][objSongDataMethod]()));
  const [unhashedElemPath, hashedElemPath] = arrCurrentUnhashedHashedElemPath;
  
  return hashedElemPath;
}

function pathResolveWhiteSpaces(fullPath) {
  const fullPathResolveWhiteSpaces = fullPath.replace(/\s+/gi, '%20');
  
  return fullPathResolveWhiteSpaces;
}

function getFullPathForSongCover(getSongOrCoverCommonPath, getHashedAudioElemPath, songPathFunctionsData, currentSongDataIndex) {
  const fullPath = `${getSongOrCoverCommonPath(...songPathFunctionsData.getSongOrCoverCommonPath)}${getHashedAudioElemPath(...songPathFunctionsData.getHashedAudioCoverElemPath, `getSongAlbumCover`, currentSongDataIndex)}`;
  return pathResolveWhiteSpaces(fullPath);
}

// imperative wrapper function
export function getFullPathForSong(songPathFunctionsData, currentSongDataIndex) {
  const fullPath = `${getSongOrCoverCommonPath(...songPathFunctionsData.getSongOrCoverCommonPath)}${getHashedAudioElemPath(...songPathFunctionsData.getHashedAudioElemPath, `getSongName`, currentSongDataIndex)}`;

  return pathResolveWhiteSpaces(fullPath);
}

// imperative wrapper function
export function setCurrentSongInfo(songPathFunctionsData, currentSongDataIndex) {
  const [bodyBackgroundImage, songAlbumCover, arrayOfSongDataObj, songName, songAuthorBand, songAlbumName, songAlbumYear] = songPathFunctionsData.setCurrentSongInfo;

  // background-image for body
  bodyBackgroundImage.style.backgroundImage = `url(${getFullPathForSongCover(getSongOrCoverCommonPath, getHashedAudioElemPath, songPathFunctionsData, currentSongDataIndex)})`;
  // background-image for audio - player current album image
  songAlbumCover.style.backgroundImage = `url(${getFullPathForSongCover(getSongOrCoverCommonPath, getHashedAudioElemPath, songPathFunctionsData, currentSongDataIndex)})`;
  
  // current song info => songName, singer/band, album name, album releaze year
  songName.innerText = arrayOfSongDataObj[currentSongDataIndex].getSongName();
  songAuthorBand.innerText = arrayOfSongDataObj[currentSongDataIndex].getSongAuthorBand();
  songAlbumName.innerText = arrayOfSongDataObj[currentSongDataIndex].getSongAlbumName();
  songAlbumYear.innerText = arrayOfSongDataObj[currentSongDataIndex].getSongAlbumYear();
}