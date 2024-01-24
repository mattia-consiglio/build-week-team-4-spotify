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
const sourceAudio = document.getElementById("audio-source");

// const changeAudio = function (src) {
//   const sourceAudio = document.getElementById("audio-source");
//   sourceAudio.src = src;
//   audioPlayer.load();
// };
// changeAudio(
//   "https://cdns-preview-b.dzcdn.net/stream/c-bcf686b9b7b146a3ce3d160cbfa2d1b5-7.mp3"
// );

const changeAudio = function () {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/album/75621062")
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Errore nella risposta della richiesta: ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((data) => {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomUrl = data[randomIndex];

      sourceAudio.src = randomUrl;
      audioPlayer.load();
    })
    .catch((error) => {
      console.error("Errore durante il recupero dei dati:", error);
    });
};

window.onload = changeAudio;
