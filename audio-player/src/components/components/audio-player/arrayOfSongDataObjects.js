class SongData {
  constructor(songAuthorBand, songName, songAlbumName, songAlbumYear, songAlbumCover) {
    this._songAuthorBand = songAuthorBand;
    this._songName = songName;
    this._songAlbumName = songAlbumName;
    this._songAlbumYear = songAlbumYear;
    this._songAlbumCover = songAlbumCover;
  }

  getSongName() {
    // without file extension on the end
    return this._songName.replace(/\.\w+\d+$/gi, '');
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

export const arrayOfSongDataObj = [
  new SongData('Giant', '01. Thunder And Lightning.mp3', 'Time To Burn', '1990', '1990 - Time To Burn.jpg'),
  new SongData('Giant', '04. Stay.mp3', 'Time To Burn', '1990', '1990 - Time To Burn.jpg'),
  new SongData('Axel Rudi Pell', '02. Nasty Reputation.mp3', 'Nasty Reputation', '1991', '1991 - Nasty Reputation Cover.jpg'),
  new SongData('Motley Crue', '02 - Girls, Girls, Girls.mp3', 'Girls, Girls, Girls', '1987', '1987 - Girls, Girls, Girls Cover.jpg'),
  new SongData('Asking Alexandria', '10 - Moving On.mp3', 'From Death To Destiny', '2013', '2013 - From Death To Destiny Cover.png'),
  new SongData('Cinderella', `03. Nobody's Fool [1986 - Night Songs].mp3`, 'Night Songs', '1986', '1986 - Night Songs Cover.jpg'),
  new SongData('Cinderella', `07. Somebody Save Me [1986 - Night Songs].mp3`, 'Night Songs', '1986', '1986 - Night Songs Cover.jpg'),
  new SongData('Dokken', `05. Lightnin' Strikes Again.mp3`, 'Under Lock And Key', '1985', '1985 - Under Lock And Key Cover.jpg'),
  new SongData('Dokken', `14. Walk Away.mp3`, 'Beast From The East', '1988', '1988 - Beast From The East Cover.jpg'),
  new SongData('Giant', `04. I'll See You In My Dreams.mp3`, 'Last Of The Runaways', '1989', '1989 - Last Of The Runaways Cover.jpg'),
  new SongData(`Guns'N'Roses`, `This I love (2008 Chinese Democracy).mp3`, 'Chinese Democracy', '2008', '2008 - Chinese Democracy Cover.jpg'),
  new SongData(`Cinderella`, `03. Don't Know What You Got (Till It's Gone) [1988 - Long Cold Winter].mp3`, 'Long Cold Winter', '1988', '1988 - Long Cold Winter Cover.jpg'),
  new SongData(`Helloween`, `05. Forever And One (Neverland).mp3`, 'The Time Of The Oath', '1996', '1996 - The Time Of The Oath Cover.png'),
  new SongData(`Hellowen`, `06. A Tale That Wasn't right.mp3`, 'The Legacy World Tour - Live In Sao Paulo', '2007', '2007 - The Legacy World Tour - Live In Sao Paulo Cover.png'),
  new SongData(`Giant`, `05. Lost In Paradise.mp3`, 'Time To Burn', '1990', '1990 - Time To Burn.jpg'),
  new SongData(`MSG`, `09. Anytime [single edit, bonus] [1989 - Save Yourself].mp3`, 'Save Yourself', '1989', '1989 - Save Yourself Cover.jpg'),
  new SongData(`Skid Row`, `04. Quicksand Jesus [1991 - Slave To The Grind].mp3`, 'Slave To The Grind', '1991', '1991 - Slave To The Grind Cover.jpg'),
  new SongData(`Steelheart`, `09. She's Gone (Lady) [1990 - Steelheart].mp3`, 'Steelheart', '1990', '1990 - Steelheart Cover.jpg'),
  new SongData(`Wasp`, `08. The Idol (1992 -The Crimson Idol).mp3`, 'The Crimson Idol', '1992', '1992 -The Crimson Idol Cover.jpg'),
  new SongData(`Wasp`, `09. Hold On To My Heart (1992 -The Crimson Idol).mp3`, 'The Crimson Idol', '1992', '1992 -The Crimson Idol Cover.jpg'),
  new SongData(`Stone Sour`, `14. Stone Sour - Wicked Game (Acoustic).mp3`, 'Come What Ever May', '2006', `2006 - Come What Ever May Cover.jpg`),
  new SongData(`Yngwie J. Malmsteen`, `04. Forever One.mp3`, 'The Seventh Sign', '1994', '1994 - The Seventh Sign Cover.jpg'),
  new SongData(`Whitesnake`, `05. Til The End Of Time.mp3`, 'Best Ballads', '2014', '2014 -Best Ballads Cover.jpg'),
  new SongData(`Whitesnake`, `09. Sailing Ships.mp3`, 'Best Ballads', '2014', '2014 -Best Ballads Cover.jpg'),
  new SongData(`Ария`, `01. Всё, Что Было.mp3`, 'Золотые Баллады', '2011', '2011 - Золотые Баллады Cover.jpg'),
  new SongData(`Кипелов & Маврин`, `04. Я Свободен.mp3`, 'Смутное Время', '1997', '1997 - Смутное Время Cover.jpg'),
  new SongData(`nobody.one`, `08 - The Duck Song.mp3`, 'head movies', '2010', '2010 - head movies Cover.jpg'),
]