// document.addEventListener("DOMContentLoaded", function () {
//   let maxHeight = 0;
//   const earlyElements = document.querySelectorAll(".early");

//   earlyElements.forEach(function (element) {
//     maxHeight = Math.max(maxHeight, element.offsetHeight);
//   });

//   earlyElements.forEach(function (element) {
//     element.style.height = maxHeight + "px";
//   });
// });
const createAlbumCard = function (Albumcard) {
  let album = Albumcard.data.map((album) => ({
    nome: album.album.title,
    immagine: album.album.cover_medium,
    tipo: album.album.type,
    artista: album.artist.name,
    idAlbum: album.album.id,
  }));

  let unici = album.reduce((acc, artista) => {
    if (!acc.find((a) => a.nome === artista.nome)) {
      acc.push(artista);
    }
    return acc;
  }, []);

  console.log(album);

  const rigaAlbum = document.getElementById("album");
  rigaAlbum.innerHTML = "";
  rigaAlbum.innerHTML = `<h1 class="mt-3">Album</h1>`;
  unici.forEach((alb) => {
    const albumCard = document.createElement("div");
    albumCard.classList.add("col-6", "col-lg-3", "gy-3");
    albumCard.innerHTML = `
        
                <div class="card album-card rounded-3" style="height:100%">
                <a class="text-decoration-none" href="./album.html?id=${alb.idAlbum}">
                  <div class="d-flex justify-content-center mt-3">
                <img
                    src="${alb.immagine}"
                    class="card-img-top album-img "
                    alt="${alb.nome}"
                  />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-white">${alb.nome}</h5>
                    <p class="card-text text-white-50 ">
                    ${alb.tipo} • ${alb.artista}
                    </p>
                  </div></a>
                </div>
              
        `;

    rigaAlbum.appendChild(albumCard);
  });
};

const searchFetch = function (query) {
  const baseURL = "https://striveschool-api.herokuapp.com/api/deezer/";
  // const baseURL = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/";
  const myUrl = baseURL + "search?q=" + query;
  fetch(myUrl)
    .then((response) => {
      console.log("response", response);
      if (response.ok) {
        return response.json();
      } else {
        if (response.status === 404) {
          throw new Error("404 - Pagina non trovata");
        } else if (response.status === 500) {
          throw new Error("500 - Internal server error");
        } else {
          throw new Error("Errore generico");
        }
      }
    })
    .then((search) => {
      console.log("search", search);
      // createCard(search)
      // createArtistCard(search)
      createAlbumCard(search);
      creaAnnuncio(search);
    })
    .catch((err) => {
      console.log(err);
    });
};
searchFetch("queen");

const buttonPlay = document.getElementById("play-button");

document.addEventListener("DOMContentLoaded", function () {
  function hideAnnouncement() {
    const announcement = document.querySelector(".annuncio");
    if (announcement) {
      announcement.classList.add("d-none");
    }
  }
});

const creaAnnuncio = function (Albumcard) {
  let album = Albumcard.data.map((album) => ({
    nome: album.album.title,
    immagine: album.album.cover_medium,
    tipo: album.album.type,
    artista: album.artist.name,
    idAlbum: album.album.id,
  }));

  let unici = album.reduce((acc, artista) => {
    if (!acc.find((a) => a.nome === artista.nome)) {
      acc.push(artista);
    }
    return acc;
  }, []);

  console.log(album);

  const rigaAlbum = document.getElementById("annuncio");
  rigaAlbum.innerHTML = "";
  //   rigaAlbum.classList.add("row"); // Aggiungi la classe Bootstrap "row"

  // Verifica se ci sono elementi in 'unici'
  if (unici.length > 0) {
    const alb = unici[0]; // Prendi solo il primo elemento di 'unici'
    const albumCard = document.createElement("div");

    albumCard.classList.add("col-md-12"); // Aggiungi la classe per impostare la larghezza

    albumCard.innerHTML = `
        <div class="d-flex"> <!-- Utilizza la flessibilità di Bootstrap -->
          <div class="col-md-4">
            <img
              src="${alb.immagine}"
              alt="copertina album"
              class="copertina img-fluid"
            />
          </div>
          <div class="col-md-7 ms-2">
            <h6>ALBUM</h6>
            <h2>${alb.nome}</h2>
            <p>${alb.artista}</p>
            <p>Ascolta il nuovo singolo di ${alb.artista}</p>
            <button
              type="button"
              class="btn btn-success roundel px-4 text-black"
              id="play-button"
            >
              Play
            </button>
            <button
              type="button"
              class="btn btn-black border border-white roundel px-4 mx-1"
            >
              Salva
            </button>
            <a href="#" class="text-white mx-3">
              <i class="bi bi-three-dots"></i>
            </a>
            </div>
                <div class="col-1">
            <button
              type="button"
              class="btn btn-dark nascondi text-secondary w-100"
              onclick="hideAnnouncement()"
            >
              X
            </button>
            </div>
          </div>
        </div>
      `;

    rigaAlbum.appendChild(albumCard);
  }
};