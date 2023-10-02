const songArr = [
    {
        "id": 0,
        "title": "You Are Not Alone",
        "artist": "Michael Jackson",
        "file": "[SPOTIFY-DOWNLOADER.COM] You Are Not Alone.mp3"
      },
      {
        "id": 1,
        "title": "8 Letters",
        "artist": "Why Don’t We",
        "file": "[SPOTIFY-DOWNLOADER.COM] 8 Letters.mp3"
      },
      {
        "id": 2,
        "title": "A Million Dreams",
        "artist": "Ziv Zaifman & Hugh Jackman",
        "file": "[SPOTIFY-DOWNLOADER.COM] A Million Dreams.mp3"
      },
      {
        "id": 3,
        "title": "A Thousand Years",
        "artist": "Christina Perri",
        "file": "[SPOTIFY-DOWNLOADER.COM] A Thousand Years.mp3"
      },
      {
        "id": 4,
        "title": "All of the Stars",
        "artist": "Ed Sheeran",
        "file": "[SPOTIFY-DOWNLOADER.COM] All of the Stars.mp3"
      },
      {
        "id": 5,
        "title": "Before You Go",
        "artist": "Lewis Capaldi",
        "file": "[SPOTIFY-DOWNLOADER.COM] Before You Go.mp3"
      },
      {
        "id": 6,
        "title": "Brother",
        "artist": "Kodaline",
        "file": "[SPOTIFY-DOWNLOADER.COM] Brother.mp3"
      },
      {
        "id": 7,
        "title": "Castle on the Hill",
        "artist": "Ed Sheeran",
        "file": "[SPOTIFY-DOWNLOADER.COM] Castle on the Hill.mp3"
      },
      {
        "id": 8,
        "title": "Cinta Luar Biasa",
        "artist": "Andmesh Kamelang",
        "file": "[SPOTIFY-DOWNLOADER.COM] Cinta Luar Biasa.mp3"
      },
      {
        "id": 9,
        "title": "Dancing On My Own",
        "artist": "Calum Scott",
        "file": "[SPOTIFY-DOWNLOADER.COM] Dancing On My Own.mp3"
      },
      {
        "id": 10,
        "title": "Fiction",
        "artist": "Lund",
        "file": "[SPOTIFY-DOWNLOADER.COM] Fiction.mp3"
      },
      {
        "id": 11,
        "title": "Ghost",
        "artist": "Justin Bieber",
        "file": "[SPOTIFY-DOWNLOADER.COM] Ghost.mp3"
      },
      {
        "id": 12,
        "title": "golden hour",
        "artist": "JVKE",
        "file": "[SPOTIFY-DOWNLOADER.COM] golden hour.mp3"
      },
      {
        "id": 13,
        "title": "Hall of Fame",
        "artist": "The Script & will.i.am",
        "file": "[SPOTIFY-DOWNLOADER.COM] Hall of Fame (feat. will.i.am).mp3"
      },
      {
        "id": 14,
        "title": "Hanya Rindu",
        "artist": "Andmesh Kamelang",
        "file": "[SPOTIFY-DOWNLOADER.COM] Hanya Rindu.mp3"
      },
      {
        "id": 15,
        "title": "Happier",
        "artist": "Ed Sheeran",
        "file": "[SPOTIFY-DOWNLOADER.COM] Happier.mp3"
      },
      {
        "id": 16,
        "title": "Heal the World",
        "artist": "Michael Jackson",
        "file": "[SPOTIFY-DOWNLOADER.COM] Heal the World.mp3"
      },
      {
        "id": 17,
        "title": "Heartbreak Anniversary",
        "artist": "Giveon",
        "file": "[SPOTIFY-DOWNLOADER.COM] Heartbreak Anniversary.mp3"
      },
      {
        "id": 18,
        "title": "Holy",
        "artist": "Justin Bieber",
        "file": "[SPOTIFY-DOWNLOADER.COM] Holy (feat. Chance The Rapper).mp3"
      },
      {
        "id": 19,
        "title": "human",
        "artist": "Christina Perri",
        "file": "[SPOTIFY-DOWNLOADER.COM] human.mp3"
      },
      {
        "id": 20,
        "title": "i don't want to die",
        "artist": "SVMP & LEVI",
        "file": "[SPOTIFY-DOWNLOADER.COM] i don't want to die.mp3"
      },
      {
        "id": 21,
        "title": "I'd Do Anything for Love",
        "artist": "Meat Loaf",
        "file": "[SPOTIFY-DOWNLOADER.COM] I'd Do Anything For Love (But I Won't Do That).mp3"
      },
      {
        "id": 22,
        "title": "Impossible",
        "artist": "James Arthur",
        "file": "[SPOTIFY-DOWNLOADER.COM] Impossible.mp3"
      },
      {
        "id": 23,
        "title": "Insha Allah",
        "artist": "Maher Zain",
        "file": "[SPOTIFY-DOWNLOADER.COM] Insha Allah.mp3"
      },
      {
        "id": 24,
        "title": "Its All Coming Back To Me Now",
        "artist": "Celine Dion",
        "file": "[SPOTIFY-DOWNLOADER.COM] It's All Coming Back to Me Now - Radio Version.mp3"
      },
      {
        "id": 25,
        "title": "It's You",
        "artist": "Ali Gatie",
        "file": "[SPOTIFY-DOWNLOADER.COM] It's You.mp3"
      },
      {
        "id": 26,
        "title": "Jar of Hearts",
        "artist": "Christina Perri",
        "file": "[SPOTIFY-DOWNLOADER.COM] Jar of Hearts.mp3"
      },
      {
        "id": 27,
        "title": "Let Her Go",
        "artist": "Passenger",
        "file": "[SPOTIFY-DOWNLOADER.COM] Let Her Go.mp3"
      },
      {
        "id": 28,
        "title": "Let You Down",
        "artist": "NF",
        "file": "[SPOTIFY-DOWNLOADER.COM] Let You Down.mp3"
      },
      {
        "id": 29,
        "title": "Love Is Gone",
        "artist": "Dylan Matthews",
        "file": "[SPOTIFY-DOWNLOADER.COM] Love Is Gone - Acoustic.mp3"
      },
      {
        "id": 30,
        "title": "Love Is Gone Acoustic",
        "artist": "Dylan Mathews",
        "file": "[SPOTIFY-DOWNLOADER.COM] Love Is Gone.mp3"
      },
      {
        "id": 31,
        "title": "Manusia Kuat",
        "artist": "Tulus",
        "file": "[SPOTIFY-DOWNLOADER.COM] Manusia Kuat.mp3"
      },
      {
        "id": 32,
        "title": "Mockingbird",
        "artist": "Eminem",
        "file": "[SPOTIFY-DOWNLOADER.COM] Mockingbird.mp3"
      },
      {
        "id": 33,
        "title": "My Heart Will Go On",
        "artist": "Celine Dion",
        "file": "[SPOTIFY-DOWNLOADER.COM] My Heart Will Go On - Love Theme from _Titanic_.mp3"
      },
      {
        "id": 34,
        "title": "Night Changes",
        "artist": "One Direction",
        "file": "[SPOTIFY-DOWNLOADER.COM] Night Changes.mp3"
      },
      {
        "id": 35,
        "title": "Number One For Me",
        "artist": "Maher Zain",
        "file": "[SPOTIFY-DOWNLOADER.COM] Number One For Me.mp3"
      },
      {
        "id": 36,
        "title": "One Call Away",
        "artist": "Charlie Puth",
        "file": "[SPOTIFY-DOWNLOADER.COM] One Call Away.mp3"
      },
      {
        "id": 37,
        "title": "Perfect",
        "artist": "Ed Sheeran",
        "file": "[SPOTIFY-DOWNLOADER.COM] Perfect.mp3"
      },
      {
        "id": 38,
        "title": "Photograph",
        "artist": "Ed Sheeran",
        "file": "[SPOTIFY-DOWNLOADER.COM] Photograph.mp3"
      },
      {
        "id": 39,
        "title": "Right Here Waiting",
        "artist": "Richard Marx",
        "file": "[SPOTIFY-DOWNLOADER.COM] Right Here Waiting.mp3"
      },
      {
        "id": 40,
        "title": "Sad Song ",
        "artist": "We The Kings & Elena Coats",
        "file": "[SPOTIFY-DOWNLOADER.COM] Sad Song (feat. Elena Coats).mp3"
      },
      {
        "id": 41,
        "title": "Say Something",
        "artist": "Great Big World & Christina Aguilera",
        "file": "[SPOTIFY-DOWNLOADER.COM] Say Something.mp3"
      },
      {
        "id": 42,
        "title": "Secret Love Song",
        "artist": "Little Mix & Jason Derulo",
        "file": "[SPOTIFY-DOWNLOADER.COM] Secret Love Song (feat. Jason Derulo).mp3"
      },
      {
        "id": 43,
        "title": "See You Again",
        "artist": "Charlie Puth & Wiz Khalifa",
        "file": "[SPOTIFY-DOWNLOADER.COM] See You Again (feat. Charlie Puth).mp3"
      },
      {
        "id": 44,
        "title": "Someone You Loved",
        "artist": "Lewis Capaldi",
        "file": "[SPOTIFY-DOWNLOADER.COM] Someone You Loved.mp3"
      },
      {
        "id": 45,
        "title": "Story of My Life",
        "artist": "One Direction",
        "file": "[SPOTIFY-DOWNLOADER.COM] Story of My Life.mp3"
      },
      {
        "id": 46,
        "title": "Talking to the Moon",
        "artist": "Bruno Mars",
        "file": "[SPOTIFY-DOWNLOADER.COM] Talking to the Moon.mp3"
      },
      {
        "id": 47,
        "title": "This Is Me",
        "artist": "Keala Settle",
        "file": "[SPOTIFY-DOWNLOADER.COM] This Is Me.mp3"
      },
      {
        "id": 48,
        "title": "through it all",
        "artist": "sombr",
        "file": "[SPOTIFY-DOWNLOADER.COM] through it all.mp3"
      },
      {
        "id": 49,
        "title": "Too Good At Goodbyes Acoustic",
        "artist": "Sam Smith",
        "file": "[SPOTIFY-DOWNLOADER.COM] Too Good At Goodbyes - Acoustic.mp3"
      },
      {
        "id": 50,
        "title": "Too Good At Goodbyes",
        "artist": "Sam Smith",
        "file": "[SPOTIFY-DOWNLOADER.COM] Too Good At Goodbyes.mp3"
      },
      {
        "id": 51,
        "title": "Way Back Home",
        "artist": "SHAUN & Conor Maynard",
        "file": "[SPOTIFY-DOWNLOADER.COM] Way Back Home (feat. Conor Maynard) - Sam Feldt Edit.mp3"
      },
      {
        "id": 52,
        "title": "When I Was Your Man",
        "artist": "Bruno Mars",
        "file": "[SPOTIFY-DOWNLOADER.COM] When I Was Your Man.mp3"
      }
]

const songList = document.getElementById("songlist")
const audioPlayer = document.querySelector(".audio-player");
const playPause = document.getElementById("play-pause");
const next = document.getElementById("next");
const prev  = document.getElementById("prev");
const songRange = document.getElementById("seek-bar");
//cst is current song time
const currentTime = document.getElementById("current-time");
//tst is song duration
const songTime = document.getElementById("duration");

const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");

const audio = new Audio()

let songId = 0

songArr.forEach(songs => {
    const song = document.createElement("div")
    const title = document.createElement("h3")
    const divide = document.createElement("h3")
    const artist = document.createElement("h3")

    title.innerHTML = songs.title
    divide.innerHTML = "--"
    artist.innerHTML = songs.artist

    song.classList.add("song")
    title.classList.add("h3")
    divide.classList.add("h3")
    artist.classList.add("h3")
    
    song.appendChild(title)
    song.appendChild(divide)
    song.appendChild(artist)

    songList.appendChild(song)

    song.addEventListener("click", () => {
        audio.src = songs.file
        audio.play()
        playPause.innerHTML = "||"
        songTitle.innerHTML = songs.title
        songArtist.innerHTML = songs.artist
        songId = songs.id

        const allSongs = document.querySelectorAll(".song")
        allSongs.forEach(song => {
            song.classList.remove("active")
        })
        song.classList.add("active")
    })
})

window.addEventListener("load",() => {
    const song = songArr[songId]
    audio.src = song.file
    songTitle.innerHTML = song.title
    songArtist.innerHTML = song.artist
    const allSongs = document.querySelectorAll(".song")
    allSongs[songId].classList.add("active")
})

audio.addEventListener("loadedmetadata",() => {
    songTime.innerHTML = formatTime(audio.duration)
    songRange.max = audio.duration
})

audio.onended = () => {
    songId = (songId + 1)
    let nextSong = songArr[songId]
    audio.src = nextSong.file
    songTitle.innerHTML = nextSong.title
    songArtist.innerHTML = nextSong.artist
    audio.play()

    const allSongs = document.querySelectorAll(".song")
    allSongs.forEach(song => {
        song.classList.remove("active")
    })
    allSongs[songId].classList.add("active")
}

//formats the time of the audio from alot of seconds to minutes
function formatTime(timeSeconds){
    const minutes = Math.floor(timeSeconds / 60)
    const seconds = Math.floor(timeSeconds % 60)
    if(seconds < 10){
        return `${minutes}:0${seconds}`
    } else {
        return `${minutes}:${seconds}`
    }
}

//plays or pauses the audio depending on if the audio is active or not
playPause.addEventListener("click",() => {
    if(audio.paused){
        audio.play()
        playPause.innerHTML = "||"
    } else {
        audio.pause()
        playPause.innerHTML = "▶"
    }
})

//the cst span element will display the current song time of the audio
// the range scrollbar will adjust its timing based on the audios current time
audio.addEventListener("timeupdate", () => {
    currentTime.innerHTML = formatTime(audio.currentTime)
    songRange.value = audio.currentTime
})

//when scroll is dragged, the audio will adjust its duration
currentTime.addEventListener("input", () => {
    audio.currentTime = currentTime.value
})

//cst element changes time when the range is dragged
songRange.addEventListener("mousemove",() => {
    currentTime.innerHTML = formatTime(songRange.value)
})

//same like the cst input event, the audio will adjust itself
songRange.addEventListener("change", () => {
    audio.currentTime = songRange.value
})

next.addEventListener("click",() => {
    if(songId == (songArr.length - 1)){
        songId = 0
    } else {
        songId++
    }
    let nextSong = songArr[songId]
    audio.src = nextSong.file
    songTitle.innerHTML = nextSong.title
    songArtist.innerHTML = nextSong.artist
    audio.play()

    const allSongs = document.querySelectorAll(".song")
    allSongs.forEach(song => {
        song.classList.remove("active")
    })
    allSongs[songId].classList.add("active")

})

prev.addEventListener("click",() => {
    if(songId == 0){
        songId = songArr.length - 1
    } else {
        songId--
    }
    let nextSong = songArr[songId]
    audio.src = nextSong.file
    songTitle.innerHTML = nextSong.title
    songArtist.innerHTML = nextSong.artist
    audio.play()

    const allSongs = document.querySelectorAll(".song")
    allSongs.forEach(song => {
        song.classList.remove("active")
    })
    allSongs[songId].classList.add("active")
})