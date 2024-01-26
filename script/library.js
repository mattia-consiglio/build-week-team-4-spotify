const library = [];
const cuoreicon = document.getElementById("addlibrary");
if (Array.isArray(JSON.parse(localStorage.getItem("library")))) {
  library.push(...JSON.parse(localStorage.getItem("library")));
}

const addlibrary = function (data) {
  let checkarray = library.findIndex(
    (arr) => arr.id === data.id && arr.tipo === data.tipo
  );

  if (checkarray !== -1) {
    library.splice(checkarray, 1);
    cuoreicon.innerHTML = '<i class="si si-love"></i>';
    cuoreicon.classList.remove("active");
  } else {
    library.push(data);
    cuoreicon.innerHTML = '<i class="si si-lovefill"></i>';
    cuoreicon.classList.add("active");
  }

  localStorage.setItem("library", JSON.stringify(library));
  console.log(library);
  updateVisualLibrary();
};

const updateVisualLibrary = function () {
  const libContainer = document.getElementById("libraryplaylist");
  libContainer.innerHTML = "";
  const page = window.location.pathname === "/album.html" ? "album" : "artist";
  const pageid =
    page === "album"
      ? new URLSearchParams(window.location.search).get("id")
      : new URLSearchParams(window.location.search).get("artistId");
  library.forEach((element) => {
    console.log(pageid);
    const libraryList = document.createElement("div");
    libraryList.classList.add("d-flex", "mb-3");
    console.log(page, element.tipo, element.id, pageid);
    if (page === element.tipo && pageid === element.id.toString()) {
      libraryList.classList.add("libraryActive");
      cuoreicon.innerHTML = '<i class="si si-lovefill"></i>';
      cuoreicon.classList.add("active");
    }
    let page1 = "";
    if (element.tipo === "album") {
      page1 = "album.html?id=" + element.id;
    } else {
      page1 = "artist.html?artistId=" + element.id;
    }
    libraryList.innerHTML = `
    <div>
    <a class="text-decoration-none" href="./${page1}">
                <img src="${element.cover}" />
              </div>
              <div>
                <p class="mb-0">${element.title}</p>
                <p>${element.tipo} &centerdot; ${element.artist}</p></a>
              </div>
              `;
    libContainer.appendChild(libraryList);
  });
};
updateVisualLibrary();
