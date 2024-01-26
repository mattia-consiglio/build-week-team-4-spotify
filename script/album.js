window.onload = function () {
  const albumTitle = document.getElementById("albumTitle");
  const albumCover = document.getElementById("albumCover");
  const albumArtist = document.getElementById("albumArtist");
  const albumTracksNumber = document.getElementById("albumTracksNumber");
  const releaseDate = document.getElementById("releaseDate");
  const albumDuration = document.getElementById("albumDuration");
  const artistImg = document.getElementById("artistImg");

  const id = new URLSearchParams(window.location.search).get("id");

  if (!id) {
    window.location = "./404.html";
    return;
  }

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

  const createTracksRows = (tracks) => {
    const container = document.getElementById("tracksContainer");
    container.innerHTML = "";
    tracks.forEach((track, i) => {
      const row = document.createElement("div");
      row.classList.add("table-row");
      row.setAttribute("role", "row");
      row.innerHTML = `
		<div class="table-cell" role="gridcell" aria-colindex="1">
			<button class="btn bg-transparent"><span class="icon-medium" onclick="playTrack({id:${track.id}, title: '${track.title}', preview: '${track.preview}', artist: {id: ${track.artist.id}, name: '${track.artist.name}'}, cover: '${track.album.cover_small}'})">
				<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24"
													class="Svg-sc-ytk21e-0 bneLcE"><path
														d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z">
													</path></svg>
											</span></button>
										<div>${i + 1}</div>
									</div>
									<div class="table-cell" role="gridcell" aria-colindex="2">
										<div class="iCQtmPqY0QvkumAOuCjr"><a class="text-decoration-none text-body" draggable="false" href="#track" tabindex="-1">
												<div class="" dir="auto" data-encore-id="text">${track.title}</div>
											</a><span class="" data-encore-id="text"><span><a class="text-decoration-none text-body-secondary"
														dir="auto" href="./artist.html?id=${track.artist.id}" tabindex="-1">${
        track.artist.name
      }</a></span></span></div>
									</div>
									<div class="table-cell justify-content-around" role="gridcell" aria-colindex="3">
										<button class="btn bg-transparent d-flex border-0 py-0 opacity-0" aria-checked="false"
											data-testid="add-button" aria-label="Salva in La tua libreria" tabindex="-1"><span
												aria-hidden="true" class="icon-medium"><svg data-encore-id="icon" role="img" aria-hidden="true"
													viewBox="0 0 16 16">
													<path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z">
													</path>
													<path
														d="M11.75 8a.75.75 0 0 1-.75.75H8.75V11a.75.75 0 0 1-1.5 0V8.75H5a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 1.5 0v2.25H11a.75.75 0 0 1 .75.75z">
													</path>
												</svg>
											</span>
										</button>
										<div>${durationToString(track.duration, 2)}</div>
										<button class="btn bg-transparent d-flex border-0 py-0 opacity-0 dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"
											aria-label="Altre opzioni per ${track.title}" tabindex="-1"><span
												aria-hidden="true" class="icon-medium"><svg data-encore-id="icon" role="img" aria-hidden="true"
													viewBox="0 0 16 16">
													<path
														d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z">
													</path>
												</svg>
                        
											</span>
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
                    

                      
		`;
      container.appendChild(row);
    });
  };
  let dataLibrary = {};
  document.getElementById("addlibrary").addEventListener("click", function () {
    addlibrary(dataLibrary);
  });
  const fillInfo = (data) => {
    albumTitle.innerText = data.title;
    albumCover.src = data.cover_xl;
    albumCover.alt = data.title;
    albumArtist.innerText = data.artist.name;
    albumTracksNumber.innerText = data.nb_tracks + " brani";
    releaseDate.innerText = data.release_date.split("-")[0];
    artistImg.src = data.artist.picture_small;
    artistImg.alt = data.artist.name;
    dataLibrary = {
      title: data.title,
      cover: data.cover_small,
      artist: data.artist.name,
      tipo: data.type,
      id: data.id,
    };
    albumDuration.innerText = durationToString(data.duration, 1);
    createTracksRows(data.tracks.data);

    albumCover.addEventListener("load", () => {
      setTimeout(() => {
        const avgColor = getMostRecurrentColor(albumCover);
        Array.from(document.getElementsByClassName("customBg")).forEach(
          (el) => {
            // el.style.backgroundColor = `rgb(${avgColor.r}, ${avgColor.g}, ${avgColor.b})`
            el.style.backgroundColor = avgColor;
          }
        );
      }, 100);
    });
    removePlaceholders();
    generateTracks(data.tracks.data, "album");
  };

  api("album/" + id, fillInfo);
};
