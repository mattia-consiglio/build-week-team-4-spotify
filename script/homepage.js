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

// function goToAlbumPage() {
//   window.location.href = "album.html";
// }
