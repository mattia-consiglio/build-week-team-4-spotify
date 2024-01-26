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
// const sourceAudio = document.getElementById("audio-source");

const changeAudio = function (src) {
  const sourceAudio = document.getElementById("audio-source");
  sourceAudio.src = src;
  audioPlayer.load();
};
changeAudio(
  "https://cdns-preview-b.dzcdn.net/stream/c-bcf686b9b7b146a3ce3d160cbfa2d1b5-7.mp3"
);

// const changeAudio = function () {
//   fetch("https://striveschool-api.herokuapp.com/api/deezer/album/75621062")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(
//           `Errore nella risposta della richiesta: ${response.statusText}`
//         );
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const randomIndex = Math.floor(Math.random() * data.length);
//       const randomUrl = data[randomIndex];

//       sourceAudio.src = randomUrl;
//       audioPlayer.load();
//     })
//     .catch((error) => {
//       console.error("Errore durante il recupero dei dati:", error);
//     });
// };

// window.onload = changeAudio;

// const audioPlayer = document.getElementById("audio-player");
const sourceAudio = document.getElementById("audio-source");

// const changeAudio = function () {
//   fetch(
//     "https://striveschool-api.herokuapp.com/api/deezer/artist/412/top?limit=50"
//   )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(
//           `Errore nella risposta della richiesta: ${response.statusText}`
//         );
//       }
//       return response.json();
//     })
//     .then((data) => {
//       // Assicurati che l'oggetto restituito abbia una proprietà "link"
//       if (!data || !data.link) {
//         throw new Error("L'oggetto restituito non ha una proprietà 'link'.");
//       }

//       const randomUrl = data.link; // Modifica qui in base alla tua struttura dati

//       sourceAudio.src = randomUrl;
//       audioPlayer.load();
//     })
//     .catch((error) => {
//       console.error("Errore durante il recupero dei dati:", error);
//     });
// };

// window.onload = changeAudio;

$(document).ready(function () {
  // Seleziona i bottoni e l'elemento audio
  const playButton = $(".play");
  const audio = $("#audio-player")[0]; // [0] è necessario per ottenere l'elemento JavaScript dall'oggetto jQuery

  // Gestisci il clic sul pulsante di riproduzione/pausa
  playButton.on("click", function () {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });

  // Aggiorna il pulsante di riproduzione quando cambia lo stato dell'audio
  audio.addEventListener("play", function () {
    playButton
      .find("svg.play path")
      .attr(
        "d",
        "M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"
      );
  });

  audio.addEventListener("pause", function () {
    playButton.find("svg.play path").attr("d", "M0 0h6v16H0zm8 0h6v16H8z");
  });

  // Aggiorna la barra di avanzamento del tempo
  audio.addEventListener("timeupdate", function () {
    const currentTime = audio.currentTime;
    const duration = audio.duration;

    // Aggiorna la visualizzazione del tempo corrente
    $("#current-time").text(formatTime(currentTime));

    // Aggiorna la barra di avanzamento
    const progress = (currentTime / duration) * 100;
    $("#seek-bar").val(progress);

    // Aggiorna la visualizzazione della durata totale
    $("#duration").text(formatTime(duration));
  });

  // Gestisci il trascinamento della barra di avanzamento
  $("#seek-bar").on("input", function () {
    const progress = $(this).val();
    const duration = audio.duration;
    const currentTime = (progress / 100) * duration;

    // Imposta il tempo corrente dell'audio
    audio.currentTime = currentTime;
  });

  // Funzione per formattare il tempo nel formato mm:ss
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
});






const updateRangeInput = input => {
	const max = input.max
	const min = input.min
	const value = input.value
	const step = input.step
	let perc = 0
	if (value > min) {
		perc = (value - min) / (max - min)
	}
	input.style.setProperty('--value', perc * 100 + '%')
}

document.querySelectorAll("input[type=range]").forEach((input) => {
  updateRangeInput(input)
  input.addEventListener('input', ()=> {
    updateRangeInput(input)
  } )
})