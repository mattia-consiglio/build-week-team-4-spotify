const durationToString = (duration, format = 1) => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration - hours * 3600) / 60);
  const seconds = Math.floor(duration - hours * 3600 - minutes * 60);
  let hoursString;
  let minutesString;
  if (format === 1) {
    hoursString =
      hours > 1 ? hours + " ore " : hours === 1 ? hours + " ora " : "";
    minutesString =
      minutes > 1
        ? minutes + " minuti"
        : minutes === 1
        ? minutes + " minuto"
        : "";
    return `${hoursString}${minutesString}`;
  }
  if (format === 2) {
    hoursString = hours ? hours + ":" : "";
    minutesString = minutes + ":";

    return `${hoursString}${minutesString}${seconds
      .toString()
      .padStart(2, "0")}`;
  }
};

const createCardArt = 0;
let timeLastChange = new Date();
const searchDelay = 500;

const createCard = function (m) {
  console.log(m);
  const container = document.getElementById("cont");
  container.innerHTML = "";
  const createCardArt = document.createElement("div");
  createCardArt.classList.add("col-12","col-xl-6");
  createCardArt.innerHTML = `
  
  <h1 class="mb-2">Artista</h1>
  <div class="card artist-card mb-3 h-75">
  <a class="text-decoration-none text-white" href="./artist.html?artistId=${m.data[0].artist.id}">
  <div class="card-body">
  <img src="${m.data[0].artist.picture_small}" class="rounded-circle mb-2"  />
  <h5 class="card-title fw-bold fs-5 ">${m.data[0].artist.name}</h5>
  <p class="card-text text-white-50 ">
  ${m.data[0].artist.type}
  </p>

  </div></a>
  </div>
  
  `;
  container.appendChild(createCardArt);

  const createCardSong = document.createElement("div");
  createCardSong.classList.add("col-12", "col-xl-6");
  createCardSong.innerHTML = `<h1>Brani </h1>`;
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("altezza-brani");
  m.data.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card", "cardsong", "border", "border-0");
    card.innerHTML = `
                <div class="row riga-card g-0">
                <div class="col-2  d-flex align-items-center ps-3">
                <div class="cont-svg-playbutton d-flex">
                  <button class="svg-play"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI "><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg></button>
                  <img
                  src="${element.album.cover_small}"
                  class="img-fluid rounded-start"
                  alt="${element.title}"
                />
                </div>
                  </div>
                  <div class="col-5 d-flex flex-row">
                    <div class="card-body w-100">
                      <div class="d-flex flex-column" >
                        <h6 class="card-title song-title">${element.title}</h6>
                        <a class="text-white-50 name-dec " href="./artist.html?artistId=${
                          element.artist.id
                        }"><p class="card-text">
                        ${element.artist.name}
                        </p></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-5 d-flex justify-content-evenly align-items-center flex-wrap">
                      <button class='btn plus-svg border border-0 btn-bg-transparent ' ><i class="bi bi-plus-circle"></i></button>
                      <p class="m-0">${durationToString(
                        element.duration,
                        2
                      )}</p>
                      <button type="button" class="btn btn-white  dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots"></i>

                      </button>
                      <ul class="dropdown-menu z-1">
                        <li><a class="dropdown-item" href="#"><button class="btn bg-transparent ps-0 border-0"><span class="icon-small"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 ewCuAY"><path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path></svg></span></button>  Aggiungi alla playlist</a> </li>
                        <li><a class="dropdown-item" href="#"><button class="btn bg-transparent ps-0 border-0"><span class="icon-small"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 ewCuAY"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75z"></path></svg></span></button> Salva nei brani che ti piacciono</a></li>
                        <li><a class="dropdown-item" href="#"><button class="btn bg-transparent ps-0 border-0"><span class="icon-small"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 ewCuAY"><path d="M16 15H2v-1.5h14V15zm0-4.5H2V9h14v1.5zm-8.034-6A5.484 5.484 0 0 1 7.187 6H13.5a2.5 2.5 0 0 0 0-5H7.966c.159.474.255.978.278 1.5H13.5a1 1 0 1 1 0 2H7.966zM2 2V0h1.5v2h2v1.5h-2v2H2v-2H0V2h2z"></path></svg></span></button> Aggiungi in coda</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#"><button class="btn bg-transparent ps-0 border-0"><span class="icon-small"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 ewCuAY"><path d="M5.624 3.886A4.748 4.748 0 0 0 3.25 8c0 1.758.955 3.293 2.375 4.114l.75-1.3a3.249 3.249 0 0 1 0-5.63l-.75-1.298zm4.001 1.299.75-1.3A4.748 4.748 0 0 1 12.75 8a4.748 4.748 0 0 1-2.375 4.114l-.75-1.3a3.249 3.249 0 0 0 0-5.63zM8 6.545a1.455 1.455 0 1 0 0 2.91 1.455 1.455 0 0 0 0-2.91z"></path><path d="M4 1.07A7.997 7.997 0 0 0 0 8a7.997 7.997 0 0 0 4 6.93l.75-1.3A6.497 6.497 0 0 1 1.5 8a6.497 6.497 0 0 1 3.25-5.63L4 1.07zm7.25 1.3.75-1.3A7.997 7.997 0 0 1 16 8a7.997 7.997 0 0 1-3.999 6.93l-.75-1.3A6.497 6.497 0 0 0 14.5 8a6.497 6.497 0 0 0-3.25-5.63z"></path></svg></span></button> Vai a Radio del brano</a></li>
                        <li><a class="dropdown-item" href="#"><button class="btn bg-transparent ps-0 border-0"><span class="icon-small"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 ewCuAY"><path d="M11.757 2.987A4.356 4.356 0 0 0 7.618 0a4.362 4.362 0 0 0-4.139 2.987 5.474 5.474 0 0 0-.22 1.894 5.604 5.604 0 0 0 1.4 3.312l.125.152a.748.748 0 0 1-.2 1.128l-2.209 1.275A4.748 4.748 0 0 0 0 14.857v1.142h8.734A5.48 5.48 0 0 1 8.15 14.5H1.517a3.245 3.245 0 0 1 1.6-2.454l2.21-1.275a2.25 2.25 0 0 0 .6-3.386l-.128-.153a4.112 4.112 0 0 1-1.05-2.44A4.053 4.053 0 0 1 4.89 3.47a2.797 2.797 0 0 1 1.555-1.713 2.89 2.89 0 0 1 3.293.691c.265.296.466.644.589 1.022.12.43.169.876.144 1.322a4.12 4.12 0 0 1-1.052 2.44l-.127.153a2.239 2.239 0 0 0-.2 2.58c.338-.45.742-.845 1.2-1.173 0-.162.055-.32.156-.447l.126-.152a5.598 5.598 0 0 0 1.4-3.312 5.499 5.499 0 0 0-.218-1.894zm3.493 3.771a.75.75 0 0 0-.75.75v3.496h-1a2.502 2.502 0 0 0-2.31 1.542 2.497 2.497 0 0 0 1.822 3.406A2.502 2.502 0 0 0 16 13.502V7.508a.75.75 0 0 0-.75-.75zm-.75 6.744a.998.998 0 0 1-1.707.707 1 1 0 0 1 .707-1.706h1v1z"></path></svg></button> Vai all'artista</a></li>
                        <li><a class="dropdown-item" href="#"><button class="btn bg-transparent ps-0 border-0"><span class="icon-small"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 ewCuAY"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path d="M8 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"></path></svg></span></button> Vai all'album</a></li>
                        <li><a class="dropdown-item" href="#"><button class="btn bg-transparent ps-0 border-0"><span class="icon-small"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 ewCuAY"><path d="M16 8.328V1h-1.5v4.828h-1a2.5 2.5 0 1 0 2.5 2.5zm-2.5-1h1v1a1 1 0 1 1-1-1zm-4.5 3V4H7.5v3.828h-1a2.5 2.5 0 1 0 2.5 2.5zm-2.5-1h1v1a1 1 0 1 1-1-1zM0 14.5h16V16H0v-1.5zM2 10H0v1.5h2V10zM0 5.5h4V7H0V5.5zM12 1H0v1.5h12V1z"></path></svg></span></button> Mostra riconoscimenti</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#"><button class="btn bg-transparent ps-0 border-0"><span class="icon-small"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 ewCuAY"><path d="M1 5.75A.75.75 0 0 1 1.75 5H4v1.5H2.5v8h11v-8H12V5h2.25a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75v-9.5z"></path><path d="M8 9.576a.75.75 0 0 0 .75-.75V2.903l1.454 1.454a.75.75 0 0 0 1.06-1.06L8 .03 4.735 3.296a.75.75 0 0 0 1.06 1.061L7.25 2.903v5.923c0 .414.336.75.75.75z"></path></svg></span></button> Condividi</a></li>
                      </ul>
                      </div>

                    </div>
                  
              
              
`;

    cardContainer.appendChild(card);
  });
  createCardSong.appendChild(cardContainer);
  container.appendChild(createCardSong);
};

const createArtistCard = function (ArtistCard) {
  let artisti = ArtistCard.data.map((canzone) => ({
    nome: canzone.artist.name,
    immagine: canzone.artist.picture_medium,
    tipo: canzone.artist.type,
    idArtist: canzone.artist.id,
  }));

  let unici = artisti.reduce((acc, artista) => {
    if (!acc.find((a) => a.nome === artista.nome)) {
      acc.push(artista);
    }
    return acc;
  }, []);

  console.log(artisti);

  const rigaArtist = document.getElementById("cont1");
  rigaArtist.innerHTML = "";
  rigaArtist.innerHTML = `<h1 class="mt-3">Artisti</h1>`;
  unici.forEach((art) => {
    const artistCard = document.createElement("div");
    artistCard.classList.add(
      "col-6",
      "col-sm-6",
      "col-md-4",
      "col-lg-4",
      "col-xl-3",
      "gy-3"
    );
    artistCard.innerHTML = `
        
                
                <div class="card artist-card rounded-3" style="height:100%" >
                <a class="text-decoration-none" href="./artist.html?artistId=${art.idArtist}">
                  <div class="d-flex cont-img justify-content-center mt-3">
                  <img
                  src="${art.immagine}"
                  class="card-img-top artist-img "
                  alt="..."
                  />
                  <button class="rounded-circle" id="playbut" onclick="playS(${art.idArtist})"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI svg-art"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg> </button>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-white text-truncate">${art.nome}</h5>
                    <p class="card-text text-white-50">
                    Artista
                    </p>
                  </div></a>
                  
                </div>
              
        `;

    rigaArtist.appendChild(artistCard);
  });
};
//const playS = function (riproduci) {
// fetch(
//   "https://striveschool-api.herokuapp.com/api/deezer/artist/" +
//     artistId +
//     "/top?limit=10"
// )
// .then((response) => {
//   console.log("response", response);
//   if (response.ok) {
//     return response.json();
//   } else {
//     if (response.status === 404) {
//       throw new Error("404 - Pagina non trovata");
//     } else if (response.status === 500) {
//       throw new Error("500 - Internal server error");
//     } else {
//       throw new Error("Errore generico");
//     }
//   }
// })
// .then((search) => {

// })
// .catch((err) => {
//   console.log(err);
// });
//};

// const playS = function (riproduci) {
//   let artisti = riproduci.data.map((canz) => ({
//     nome: canz.artist.name,
//     immagine: canz.artist.picture_medium,
//     tipo: canz.artist.type,
//     idArtist: canz.artist.id,
//     mp3: canz.preview,
//   }));
//   console.log(artisti);
//   let unici = artisti.reduce((ac, ripr) => {
//     if (!ac.find((a) => a.nome === ripr.nome)) {
//       ac.push(ripr);
//     }
//     return ac;
//   }, []);
//   console.log(unici);
//   const c = new Audio(unici[0].mp3);
//   c.play();
// };

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

  const rigaAlbum = document.getElementById("cont4");
  rigaAlbum.innerHTML = "";
  rigaAlbum.innerHTML = `<h1 class="mt-3">Album</h1>`;
  unici.forEach((alb) => {
    const albumCard = document.createElement("div");
    albumCard.classList.add(
      "col-6",
      "col-sm-6",
      "col-md-4",
      "col-lg-4",
      "col-xl-3",
      "gy-3"
    );
    albumCard.innerHTML = `
        
                <div class="card album-card rounded-3" style="height:100%">
                <a class="text-decoration-none" href="./album.html?id=${alb.idAlbum}">
                  <div class="d-flex cont-img1 justify-content-center mt-3">
                <img
                    src="${alb.immagine}"
                    class="card-img-top album-img "
                    alt="${alb.nome}"
                  />
                  <button class="rounded-circle" id="playbut1" onclick="playS(${alb.idArtist})"><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI svg-art"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg> </button>
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

const inputField = document.getElementById("search-input");
inputField.addEventListener("input", function (rem) {
  rem.preventDefault();
  timeLastChange = new Date();

  setTimeout(() => {
    if (new Date() - timeLastChange < searchDelay) {
      return;
    }
    console.log("Input change");
    const remove = document.getElementById("cont");
    console.log(remove);
    const rigaArtist = document.getElementById("cont1");
    const rigaAlbum = document.getElementById("cont4");
    const removesFoglia = document.getElementById("sfoglia");
    if (inputField.value !== "") {
      searchFetch(inputField.value);
      removesFoglia.innerHTML = "";
    } else {
      remove.innerHTML = "";
      rigaArtist.innerHTML = "";
      rigaAlbum.innerHTML = "";
      removesFoglia.innerHTML = `
    <h2
          class="d-flex justify-content-center justify-content-md-start mb-3 mt-4"
        >
          Sfoglia tutto
        </h2>
        <div class="row gx-3 gy-3">
          <div
            class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center"
          >
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-1.jpeg"
              alt=""
            />
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-2.jpg"
              alt=""
            />
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-3.jpg"
              alt=""
            />
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-4.jpg"
              alt=""
            />
          </div>
          <div
            class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center"
          >
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-5.jpg"
              alt=""
            />
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-6.jpg"
              alt=""
            />
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-7.jpg"
              alt=""
            />
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-8.jpg"
              alt=""
            />
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-9.jpg"
              alt=""
            />
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-10.jpg"
              alt=""
            />
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-11.jpg"
              alt=""
            />
          </div>
          <div
            class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center"
          >
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-12.jpg"
              alt=""
            />
          </div>
          <div
            class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center"
          >
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-13.jpeg"
              alt=""
            />
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-14.jpg"
              alt=""
            />
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-15.jpg"
              alt=""
            />
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-16.jpg"
              alt=""
            />
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-17.jpg"
              alt=""
            />
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-18.jpg"
              alt=""
            />
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-19.jpg"
              alt=""
            />
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-20.jpg"
              alt=""
            />
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-21.jpg"
              alt=""
            />
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-22.jpg"
              alt=""
            />
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-23.jpg"
              alt=""
            />
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <img
              class="img-fluid"
              src="./assets/imgs/search/image-24.jpg"
              alt=""
            />
          </div>
        </div>
    `;
    }
  }, searchDelay);
});

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
      createCard(search);
      createArtistCard(search);
      createAlbumCard(search);
      playS(search);
    })
    .catch((err) => {
      console.log(err);
    });
};

const query = new URLSearchParams(window.location.search).get("q");
if (query) {
  searchFetch(query);
}
