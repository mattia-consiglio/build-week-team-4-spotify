// Ottieni l'elemento audio e gli elementi personalizzati
const audioPlayer = document.getElementById('audio-player')
const currentTimeDisplay = document.getElementById('current-time')
const progressInput = document.getElementById('seek-bar')
const durationDisplay = document.getElementById('duration')
const audioSource = document.getElementById('audio-source')
const playPauseButtons = document.querySelectorAll(
	'button[data-action="playPause"][data-active-action="true"]'
)
const prevButton = document.getElementById('player-prev')
const nextButton = document.getElementById('player-next')
const volumeInput = document.getElementById('volume-input')
const volumeButton = document.getElementById('volume-button')
const coverImage = document.getElementById('player-cover-image')
const title = document.getElementById('player-title')
const artist = document.getElementById('player-artist')

let audioLoaded = false
let isChangingTime = false
let minVolume = 0.25
let volume = 0.6
let shuffleActive = false
let isPlaying = false
let firstPlay = true

let currentTrackId = null
const sourceTracks = []
const extractionTracks = []
const quee = []

const playerSetting = {
	shuffle: false,
	repeat: false,
	volume: 0.6,
}

// genera array di riproduzione
const generateTracks = data => {
	data.forEach(track => {
		const trackObject = {
			id: track.id,
			title: track.title,
			preview: track.link,
			artist: {
				id: track.artist.id,
				name: track.artist.name,
			},
			cover: track.album.cover_small,
		}
		sourceTracks.push(trackObject)
	})
	console.log(sourceTracks)
}

const toggleShuffle = () => {
	shuffleActive = !shuffleActive
	if (shuffleActive) {
		shuffleButton.classList.add('active')
	} else {
		shuffleButton.classList.remove('active')
	}
}

const updatePlayPauseButton = () => {
	playPauseButtons.forEach(button => {
		console.log(button);
		const span = button.querySelector('span')
		if (isPlaying) {
			button.ariaLabel = 'Pause'
			span.innerHTML = '<i class="si si-pause"></i>'
		} else {
			button.ariaLabel = 'Play'
			span.innerHTML = '<i class="si si-play"></i>'
		}
	})
}

// Formatta il tempo nel formato mm:ss
const formatTime = time => {
	const minutes = Math.floor(time / 60)
	const seconds = Math.ceil(time % 60)
	return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}

// Imposta la durata totale dell'audio quando è pronto
audioPlayer.addEventListener('loadeddata', function () {
	console.log('Audio source loded', audioPlayer)
	const duration = audioPlayer.duration
	durationDisplay.textContent = formatTime(duration)
	progressInput.max = duration
	audioLoaded = true
})

// Aggiorna la barra dei secondi e il tempo corrente durante la riproduzione
audioPlayer.addEventListener('timeupdate', function () {
	const currentTime = audioPlayer.currentTime
	currentTimeDisplay.textContent = formatTime(currentTime)
	if (!isChangingTime) {
		progressInput.value = currentTime
		updateRangeInput(progressInput)
	}
})

//cambia la sorgente audio
const playTrack = function (track, starPlay = true) {
	console.log(track);
	currentTrackId = track.id
	audioLoaded = false
	audioSource.src = track.preview
	audioPlayer.load()
	coverImage.src = track.cover
	coverImage.alt = track.title
	title.innerText = track.title
	artist.innerText = track.artist.name
	artist.href = './artist.html?artistId=' + track.artist.id
	if (starPlay) {
		const itervalId = setInterval(() => {
			if (audioLoaded) {
				clearInterval(itervalId)
				audioPlayer.play()
				isPlaying = true
				updatePlayPauseButton()
			}
		}, 100)
	}
}

const playQuee = () => {}

playPauseButtons.forEach(button => {
	button.addEventListener('click', () => {
		console.log('click')
		if (button.ariaLabel === 'Play' && audioLoaded && audioPlayer.paused) {
			audioPlayer.play()
			isPlaying = true
		} else {
			audioPlayer.pause()
			isPlaying = false
		}
		updatePlayPauseButton()
	})
})

const setVolume = vol => {
	audioPlayer.volume = vol
	volume = vol
	volumeInput.value = vol
	console.log(vol)
	const icon = volumeButton.querySelector('span')
	updateRangeInput(volumeInput)

	if (vol > 0.66) {
		icon.innerHTML = '<i class="si si-volume-high"></i>'
	} else if (vol > 0.33) {
		icon.innerHTML = '<i class="si si-volume-medium"></i>'
	} else if (vol > 0) {
		icon.innerHTML = '<i class="si si-volume-low"></i>'
	} else {
		icon.innerHTML = '<i class="si si-volume-mute"></i>'
	}
}

// Inizializza il player
const initializePlayer = () => {
	// const localSettings = localStorage.getItem('playerSetting')
	// if (localSettings) {
	// 	const localSettings = JSON.parse(localSettings)
	// 	playerSetting.shuffle = localSettings.shuffle
	// 	playerSetting.repeat = localSettings.repeat
	// 	playerSetting.volume = localSettings.volume
	// }
	setVolume(playerSetting.volume)
	playTrack({
		id: 568120922,
		preview: 'https://cdns-preview-b.dzcdn.net/stream/c-bcf686b9b7b146a3ce3d160cbfa2d1b5-7.mp3',
		cover:
			'https://e-cdns-images.dzcdn.net/images/cover/8b8fc5d117f9357b79f0a0a410a170e8/56x56-000000-80-0-0.jpg',
		title: '20th Century Fox Fanfare',
		artist: {
			id: 412,
			name: 'Queen',
		},
	}, false)
}

initializePlayer()

progressInput.addEventListener('input', () => {
	isChangingTime = true
	audioPlayer.currentTime = progressInput.value
	isChangingTime = false
})

volumeInput.addEventListener('input', () => {
	const volume = parseFloat(volumeInput.value)
	setVolume(volume)
})

volumeButton.addEventListener('click', () => {
	if (volume === 0) {
		setVolume(minVolume)
	} else {
		setVolume(0)
	}
})

document.querySelectorAll('input[type=range]').forEach(input => {
	updateRangeInput(input)
	input.addEventListener('input', () => {
		updateRangeInput(input)
	})
})
