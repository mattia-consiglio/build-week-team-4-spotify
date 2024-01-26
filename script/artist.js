const addressBarContent = new URLSearchParams(location.search)
console.log(addressBarContent)

const artistId = addressBarContent.get('artistId')
console.log(artistId)
//  if (!artistId) {
//     window.location = "./404.html";
//     return;
//   }

document.addEventListener('DOMContentLoaded', () => {
	fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/' + artistId)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`)
			}
			return response.json()
		})
		.then(artistData => {
			// const body = document.getElementsByTagName("body");
			const container = document.getElementById('center')
			const imgElement = document.createElement('img')
			const artistName = document.getElementById('artist-name')
			const listeners = document.getElementById('artist-listeners')
			listeners.innerHTML = `${artistData.nb_fan} Ascoltatori mensili`
			artistName.innerText = artistData.name

			// body.appendChild(container);
			// verifiedAccount.innerHTML = `<i class="bi bi-patch-check-fill"></i> Account verificato`;
			container.style.backgroundImage = `url('${artistData.picture_xl}')`
			// imgElement.alt = artistData.name;
			artistName.textContent = artistData.name
			container.appendChild(imgElement)
			// container.appendChild(artistName);
			// container.appendChild(listeners);
			// container.appendChild(button);
		})
		.catch(error => {
			console.error('Error fetching artist data:', error)
		})

	fetch(
		'https://striveschool-api.herokuapp.com/api/deezer/artist/' + artistId + '/top?limit=10'
	).then(response => {
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}
		return response.json().then(data => {
			console.log(data)
			const sortedTracks = data.data.sort((a, b) => a.rank - b.rank)
			console.log(sortedTracks)
			const numberOfLoops = sortedTracks.length >= 10 ? 10 : sortedTracks.length
			const tracce = document.getElementById('tracce')

			for (let i = 0; i < numberOfLoops; i++) {
				const track = sortedTracks[i]
				const paragraph = document.createElement('div')

				const trackNumber = i + 1
				const numberSpan = document.createElement('span')
				numberSpan.className = 'me-4 ms-2'
				numberSpan.textContent = `${trackNumber}. `
				paragraph.appendChild(numberSpan)

				paragraph.innerHTML += `<img class="mt-3 me-3" src="${track.album.cover}" /> ${track.title}`
				tracce.appendChild(paragraph)
				console.log(sortedTracks[i])
			}
		})
	})
})
