// Ottieni l'elemento audio e gli elementi personalizzati
const audioPlayer = document.getElementById("audio-player");
const currentTimeDisplay = document.getElementById("current-time");
const seekBar = document.getElementById("seek-bar");
const durationDisplay = document.getElementById("duration");

// Imposta la durata totale dell'audio quando è pronto
audioPlayer.addEventListener("loadedmetadata", function () {
  const duration = audioPlayer.duration;
  durationDisplay.textContent = formatTime(duration);
  seekBar.max = duration;
});

// Aggiorna la barra dei secondi e il tempo corrente durante la riproduzione
audioPlayer.addEventListener("timeupdate", function () {
  const currentTime = audioPlayer.currentTime;
  currentTimeDisplay.textContent = formatTime(currentTime);
  seekBar.value = currentTime;
});

// Formatta il tempo nel formato mm:ss
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

const changeAudio = function (src) {
  const sourceAudio = document.getElementById("audio-source");
  sourceAudio.src = src;
  audioPlayer.load();
};
changeAudio(
  "https://cdns-preview-b.dzcdn.net/stream/c-bcf686b9b7b146a3ce3d160cbfa2d1b5-7.mp3"
);