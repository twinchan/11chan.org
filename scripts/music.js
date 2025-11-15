document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('audio');
  const playBtn = document.getElementById('playBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const progress = document.getElementById('progress');
  const songInfo = document.getElementById('songInfo');

  const playlist = [
    { file: 'music/song1.mp3', title: "let's try suicide, my dear", artist: 'waqs' },
    { file: 'music/song2.mp3', title: 'Royal Forest', artist: 'waqs' },
    { file: 'music/song3.mp3', title: 'Schizophrenia', artist: 'waqs' },
    { file: 'music/song4.mp3', title: 'Readth', artist: 'waqs' },
    { file: 'music/song5.mp3', title: 'Frozen in futility', artist: 'frxgxd' },
    { file: 'music/song6.mp3', title: '1553470665499594756a', artist: 'frxgxd' },
    { file: 'music/song7.mp3', title: 'glue#f8f9f9', artist: 'dssctveself' },
    { file: 'music/song8.mp3', title: 'im so tired of being alive', artist: 'frxgxd' },
    { file: 'music/song9.mp3', title: 'Slit wrist snow angel', artist: 'frxgxd' },
    { file: 'music/song10.mp3', title: 'unhappybirthday', artist: 'waqs' },
    { file: 'music/song11.mp3', title: 'everything is meaningless', artist: 'waqs' },
    { file: 'music/song12.mp3', title: 'Cute boy core', artist: 'shoebill' },
    { file: 'music/song13.mp3', title: "i don't want to be me", artist: 'waqs' }
  ];

  let currentIndex = 0;
  const MESSAGE = "it's so quiet...";
  const PLAY_SYMBOL = '▷';
  const PAUSE_SYMBOL = '||';

  function updateSongInfo(message) {
    songInfo.textContent = message;
  }

  function updatePlayButton(isPlaying) {
    playBtn.textContent = isPlaying ? PAUSE_SYMBOL : PLAY_SYMBOL;
  }

  function getCurrentSongInfo() {
    const song = playlist[currentIndex];
    return `${song.title} – ${song.artist}`;
  }

  function updateProgress(percent) {
    progress.value = percent;
    progress.style.setProperty('--fill', percent + '%');
  }

  function loadSong(index) {
    const song = playlist[index];
    audio.src = song.file;
    audio.load();
    updateProgress(0);
    updatePlayButton(false);
    updateSongInfo(MESSAGE);
  }

  function playSong() {
    audio.play();
    updatePlayButton(true);
    updateSongInfo(getCurrentSongInfo());
  }

  function pauseSong() {
    audio.pause();
    updatePlayButton(false);
    updateSongInfo(MESSAGE);
  }

  function changeSong(direction) {
    currentIndex = (currentIndex + direction + playlist.length) % playlist.length;
    loadSong(currentIndex);
    playSong();
  }

  playBtn.addEventListener('click', function() {
    if (audio.paused) {
      playSong();
    } else {
      pauseSong();
    }
  });

  prevBtn.addEventListener('click', function() {
    changeSong(-1);
  });

  nextBtn.addEventListener('click', function() {
    changeSong(1);
  });

  audio.addEventListener('timeupdate', function() {
    if (audio.duration) {
      const percent = (audio.currentTime / audio.duration) * 100;
      updateProgress(percent);
    }
  });

  progress.addEventListener('input', function() {
    if (audio.duration) {
      const newTime = (progress.value / 100) * audio.duration;
      audio.currentTime = newTime;
      updateProgress(progress.value);
    }
  });

  audio.addEventListener('ended', function() {
    changeSong(1);
  });

  loadSong(currentIndex);
});