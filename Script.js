const songs = [
    { id: '0',  src: "songs/24.mp3" },
    { id: '1',  src: "songs/29.mp3" },
    { id: '2',  src: "songs/36.mp3" },
    { id: '3',  src: "songs/41.mp3" },
    { id: '4',  src: "songs/48.mp3" },
    { id: '5',  src: "songs/53.mp3" },
    { id: '6',  src: "songs/60.mp3" },
    { id: '7',  src: "songs/64.mp3" },
    { id: '8',  src: "songs/65.mp3" },
    { id: '9', src: "songs/69.mp3" },
    { id: 'q', src: "songs/72.mp3" },
    { id: 'w', src: "songs/77.mp3" },
    { id: 'e', src: "songs/79.mp3" },
    { id: 'r', src: "songs/84.mp3" },
    { id: 't', src: "songs/96.mp3" }
];

function playSound(key) {
    const song = songs.find(s => s.id === key);
    if (song) {
        const audio = new Audio(song.src);
        audio.currentTime = 0;
        audio.play();
    }
}

window.addEventListener("keydown", (e) => {
    const key = e.key;

    if (songs.some(s => s.id === key)) {
        const pressedKey = document.getElementById(key);
        if (pressedKey) {
            pressedKey.classList.add("active");
        }
        playSound(key);

        setTimeout(() => {
            pressedKey.classList.remove("active");
        }, 150);
    }
});


const allButtons = document.querySelectorAll("button");

allButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const key = btn.id || btn.textContent;
        btn.classList.add("active");
        playSound(key);

        setTimeout(() => {
            btn.classList.remove("active");
        }, 150);
    });
});
