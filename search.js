const createCard = function (m) {
  const container = document.getElementById("cont");

  m.data.forEach((element) => {
    const createCard = document.createElement("div");
    createCard.classList.add("row", "d-flex", "flex-row");
    createCard.innerHTML = `
      <div class="col-12  ">
            <h1>Artista</h1>
            <div class="card">
              <div class="card-body">
                <img src="${m.data[0].artist.picture_small}" class="rounded-circle" />
                <h5 class="card-title">${m.data[0].artist.name}</h5>
                <p class="card-text">
                ${m.data[0].artist.type}
                </p>
                
              </div>
            </div>
          </div>
          <div class="col-12 ">
          <h1>brani</h1>
          <div class="row">
            <div class="card mb-3" style="">
              <div class="row g-0">
                <div class="col-2">
                  <img
                    src="${m.data[0].album.cover_small}"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col d-flex flex-row">
                  <div class="card-body">
                    <div d-flex >
                      <h6 class="card-title">${m.data[0].title}</h6>
                      <p class="card-text">
                      ${m.data[0].artist.type}
                      </p>
                      
                    </div>
                  </div>
                  
                  
                  <div class="col-2 d-flex justify-content-end align-items-center">
                  <button class='border border-0 bg-white' ><i class="bi bi-plus-circle"></i></button>
                  <p class="m-0">${m.data[0].duration}</p>
                  <button type="button" class='border border-0 bg-white'></button>
                  <button type="button" class="btn btn-white  dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots"></i>
                    
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#"><i class="bi bi-plus"></i> Aggiungi alla playlist</a></li>
                    <li><a class="dropdown-item" href="#"><i class="bi bi-plus-circle"></i> Salva nei brani che ti piacciono</a></li>
                    <li><a class="dropdown-item" href="#"><i class="bi bi-text-wrap"></i> Aggiungi in coda</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#"><i class="bi bi-broadcast"></i> Vai a Radio del brano</a></li>
                    <li><a class="dropdown-item" href="#"><i class="bi bi-person-gear"></i> Vai all'artista</a></li>
                    <li><a class="dropdown-item" href="#"><i class="bi bi-record-circle"></i> Vai all'album</a></li>
                    <li><a class="dropdown-item" href="#"><i class="bi bi-music-note-list"></i> Mostra riconoscimenti</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#"><i class="bi bi-share"></i> Condividi</a></li>
                  </ul>
                  </div>
                  
                  

                
                  
                </div>
        
                </div>
              </div>
            </div>
          <div class="row">
            <div class="card mb-3" style="">
              <div class="row g-0">
                <div class="col-4">
                  <img
                    src="${m.data[1].album.cover_small}"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-4 col-8 d-flex flex-row">
                  <div class="card-body">
                    <div d-flex >
                      <h5 class="card-title">${m.data[1].title}</h5>
                      <p class="card-text">
                      ${m.data[1].artist.type}
                      </p>
                      
                    </div>
                  </div>
                  <div class="col d-flex ">
                  <button class='border border-0 bg-white' ><i class="bi bi-plus-circle"></i></button>
                  </div>
                  <div class="col d-flex justify-content-center align-items-center">
                  <p>${m.data[1].duration}</p>
                  </div>
                  <div class="col d-flex">
                  
  <button type="button" class='border border-0 bg-white'></button>
  <button type="button" class="btn btn-white  dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots"></i>
    
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#"><i class="bi bi-plus"></i> Aggiungi alla playlist</a></li>
    <li><a class="dropdown-item" href="#"><i class="bi bi-plus-circle"></i> Salva nei brani che ti piacciono</a></li>
    <li><a class="dropdown-item" href="#"><i class="bi bi-text-wrap"></i> Aggiungi in coda</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#"><i class="bi bi-broadcast"></i> Vai a Radio del brano</a></li>
    <li><a class="dropdown-item" href="#"><i class="bi bi-person-gear"></i> Vai all'artista</a></li>
    <li><a class="dropdown-item" href="#"><i class="bi bi-record-circle"></i> Vai all'album</a></li>
    <li><a class="dropdown-item" href="#"><i class="bi bi-music-note-list"></i> Mostra riconoscimenti</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#"><i class="bi bi-share"></i> Condividi</a></li>
  </ul>

                
                  </div>
                </div>
        
                </div>
              </div>
            </div>
          <div class="row">
            <div class="card mb-3" style="">
              <div class="row g-0">
                <div class="col-4">
                  <img
                    src="${m.data[2].album.cover_small}"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-4 col-8 d-flex flex-row">
                  <div class="card-body">
                    <div d-flex >
                      <h5 class="card-title">${m.data[2].title}</h5>
                      <p class="card-text">
                      ${m.data[2].artist.type}
                      </p>
                      
                    </div>
                  </div>
                  <div class="col d-flex ">
                  <button class='border border-0 bg-white' ><i class="bi bi-plus-circle"></i></button>
                  </div>
                  <div class="col d-flex justify-content-center align-items-center">
                  <p>${m.data[2].duration}</p>
                  </div>
                  <div class="col d-flex">
                  
  <button type="button" class='border border-0 bg-white'></button>
  <button type="button" class="btn btn-white  dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots"></i>
    
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#"><i class="bi bi-plus"></i> Aggiungi alla playlist</a></li>
    <li><a class="dropdown-item" href="#"><i class="bi bi-plus-circle"></i> Salva nei brani che ti piacciono</a></li>
    <li><a class="dropdown-item" href="#"><i class="bi bi-text-wrap"></i> Aggiungi in coda</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#"><i class="bi bi-broadcast"></i> Vai a Radio del brano</a></li>
    <li><a class="dropdown-item" href="#"><i class="bi bi-person-gear"></i> Vai all'artista</a></li>
    <li><a class="dropdown-item" href="#"><i class="bi bi-record-circle"></i> Vai all'album</a></li>
    <li><a class="dropdown-item" href="#"><i class="bi bi-music-note-list"></i> Mostra riconoscimenti</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#"><i class="bi bi-share"></i> Condividi</a></li>
  </ul>

                
                  </div>
                </div>
        
                </div>
              </div>
            </div>
          <div class="row">
            <div class="card mb-3" style="">
              <div class="row g-0">
                <div class="col-4">
                  <img
                    src="${m.data[3].album.cover_small}"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-4 col-8 d-flex flex-row">
                  <div class="card-body">
                    <div d-flex >
                      <h5 class="card-title">${m.data[3].title}</h5>
                      <p class="card-text">
                      ${m.data[3].artist.type}
                      </p>
                      
                    </div>
                  </div>
                  <div class="col d-flex ">
                  <button class='border border-0 bg-white' ><i class="bi bi-plus-circle"></i></button>
                  </div>
                  <div class="col d-flex justify-content-center align-items-center">
                  <p>${m.data[3].duration}</p>
                  </div>
                  <div class="col d-flex">
                  
  <button type="button" class='border border-0 bg-white'></button>
  <button type="button" class="btn btn-white  dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots"></i>
    
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#"><i class="bi bi-plus"></i> Aggiungi alla playlist</a></li>
    <li><a class="dropdown-item" href="#"><i class="bi bi-plus-circle"></i> Salva nei brani che ti piacciono</a></li>
    <li><a class="dropdown-item" href="#"><i class="bi bi-text-wrap"></i> Aggiungi in coda</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#"><i class="bi bi-broadcast"></i> Vai a Radio del brano</a></li>
    <li><a class="dropdown-item" href="#"><i class="bi bi-person-gear"></i> Vai all'artista</a></li>
    <li><a class="dropdown-item" href="#"><i class="bi bi-record-circle"></i> Vai all'album</a></li>
    <li><a class="dropdown-item" href="#"><i class="bi bi-music-note-list"></i> Mostra riconoscimenti</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#"><i class="bi bi-share"></i> Condividi</a></li>
  </ul>

                
                  </div>
                </div>
        
                </div>
              </div>
            </div>
          
            </div>
          </div>`;
    container.appendChild(createCard);
  });
};
// const createAlbumCard = function (a) {
//   const riga1 = document.getElementById("cont1");
//   a.data.forEach((alb) => {
//     const albumCard = document.createElement("div");
//     albumCard.classList.add("col");
//     albumCard.innerHTML = `
//         <div class="col">
//                 <h1>Album</h1>
//                 <div class="card" style="width: 18rem">
//                   <img
//                     src="./assets/imgs/main/image-1.jpg"
//                     class="card-img-top"
//                     alt="..."
//                   />
//                   <div class="card-body">
//                     <h5 class="card-title">Card title</h5>
//                     <p class="card-text">
//                       Some quick example text to build on the card title and make up
//                       the bulk of the card's content.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//         `;
//     riga1.appendChild(albumCard);
//   });
// };

const inputField = document.getElementById("search-input");
document.getElementById("input-button").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(inputField);
  searchFetch(inputField.value);
});
const searchFetch = function (query) {
  const myUrl =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query;
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
      //   createAlbumCard(search);
    })
    .catch((err) => {
      console.log(err);
    });
};
searchFetch("queen");
