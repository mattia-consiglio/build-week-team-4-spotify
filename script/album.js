window.onload = function () {
	const albumTitle = document.getElementById('albumTitle')
	const albumCover = document.getElementById('albumCover')
	const albumArtist = document.getElementById('albumArtist')
	const albumTracksNumber = document.getElementById('albumTracksNumber')
	const releaseDate = document.getElementById('releaseDate')
	const albumDuration = document.getElementById('albumDuration')
	const artistImg = document.getElementById('artistImg')

	const id = new URLSearchParams(window.location.search).get('id')

	if (!id) {
		window.location = './404.html'
		return
	}

	const durationToString = (duration, format = 1) => {
		const hours = Math.floor(duration / 3600)
		const minutes = Math.floor((duration - hours * 3600) / 60)
		const seconds = Math.floor(duration - hours * 3600 - minutes * 60)
		let hoursString
		let minutesString
		if (format === 1) {
			hoursString = hours > 1 ? hours + ' ore ' : hours === 1 ? hours + ' ora ' : ''
			minutesString = minutes > 1 ? minutes + ' minuti' : minutes === 1 ? minutes + ' minuto' : ''
			return `${hoursString}${minutesString}`
		}
		if (format === 2) {
			hoursString = hours ? hours + ':' : ''
			minutesString = minutes + ':'

			return `${hoursString}${minutesString}${seconds.toString().padStart(2, '0')}`
		}
	}

	const createTracksRows = tracks => {
		const container = document.getElementById('tracksContainer')
		container.innerHTML = ''
		tracks.forEach((track, i) => {
			const row = document.createElement('div')
			row.classList.add('table-row')
			row.setAttribute('role', 'row')
			row.innerHTML = `
		<div class="table-cell" role="gridcell" aria-colindex="1">
			<button class="btn bg-transparent"><span class="icon-medium">
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
									<div class="table-cell justify-content-end" role="gridcell" aria-colindex="3">
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
										<button class="btn bg-transparent d-flex border-0 py-0 opacity-0"
											aria-label="Altre opzioni per ${track.title}" tabindex="-1"><span
												aria-hidden="true" class="icon-medium"><svg data-encore-id="icon" role="img" aria-hidden="true"
													viewBox="0 0 16 16">
													<path
														d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z">
													</path>
												</svg>
											</span>
										</button>
									</div>
		`
			container.appendChild(row)
		})
	}

	const fillInfo = data => {
		albumTitle.innerText = data.title
		albumCover.src = data.cover_xl
		albumCover.alt = data.title
		albumArtist.innerText = data.artist.name
		albumTracksNumber.innerText = data.nb_tracks + ' brani'
		releaseDate.innerText = data.release_date.split('-')[0]
		artistImg.src = data.artist.picture_small
		artistImg.alt = data.artist.name
		albumDuration.innerText = durationToString(data.duration, 1)
		createTracksRows(data.tracks.data)
		albumCover.addEventListener('load', () => {
			setTimeout(() => {
				const avgColor = getMostRecurrentColor(albumCover)
				Array.from(document.getElementsByClassName('customBg')).forEach(el => {
					// el.style.backgroundColor = `rgb(${avgColor.r}, ${avgColor.g}, ${avgColor.b})`
					el.style.backgroundColor = avgColor
				})
			}, 100)
		})
		removePlaceholders()
	}

	api('album/' + id, fillInfo)
}
