document.addEventListener("DOMContentLoaded", () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/1184/")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((artistData) => {
      const container = document.getElementById("center");
      const imgElement = document.createElement("img");
      const artistName = document.getElementById("artist-name");
      const listeners = document.getElementById("artist-listeners");
      listeners.innerHTML = `${artistData.nb_fan} Ascoltatori mensili`;
      artistName.innerText = artistData.name;
      const brani = document.getElementById("Brani");

      container.style.backgroundImage = `url('${artistData.picture_xl}')`;

      artistName.textContent = artistData.name;
      container.appendChild(imgElement);
      brani.appendChild(imgElement);
    })
    .catch((error) => {
      console.error("Error fetching artist data:", error);
    });

  fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/artist/1184/top?limit=10"
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json().then((data) => {
      console.log(data);
      const sortedTracks = data.data.sort((a, b) => a.rank - b.rank);
      console.log(sortedTracks);
      const numberOfLoops =
        sortedTracks.length >= 10 ? 10 : sortedTracks.length;
      const tracce = document.getElementById("tracce");

      for (let i = 0; i < numberOfLoops; i++) {
        const track = sortedTracks[i];
        const paragraph = document.createElement("div");

        const trackNumber = i + 1;
        const numberSpan = document.createElement("span");
        numberSpan.className = "me-4 ms-2";
        numberSpan.textContent = `${trackNumber}. `;
        paragraph.appendChild(numberSpan);

        paragraph.innerHTML += `<img class="mt-3 me-3" src="${track.album.cover}" /> ${track.title}`;
        tracce.appendChild(paragraph);
        console.log(sortedTracks[i]);
      }
    });
  });
});
