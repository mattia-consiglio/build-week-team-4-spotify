const library = [];
if (Array.isArray(JSON.parse(localStorage.getItem("library")))) {
  library.push(...JSON.parse(localStorage.getItem("library")));
}

const addlibrary = function (data) {
  let checkarray = library.findIndex(
    (arr) => arr.id === data.id && arr.tipo === data.tipo
  );

  if (checkarray !== -1) {
    library.splice(checkarray, 1);
  } else {
    library.push(data);
  }

  localStorage.setItem("library", JSON.stringify(library));
  console.log(library);
};
