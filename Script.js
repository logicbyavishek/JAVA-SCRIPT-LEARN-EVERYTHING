const songs = [
    { id: 0,  src: "songs/24.mp3" },
    { id: 1,  src: "songs/29.mp3" },
    { id: 2,  src: "songs/36.mp3" },
    { id: 3,  src: "songs/41.mp3" },
    { id: 4,  src: "songs/48.mp3" },
    { id: 5,  src: "songs/53.mp3" },
    { id: 6,  src: "songs/60.mp3" },
    { id: 7,  src: "songs/64.mp3" },
    { id: 8,  src: "songs/65.mp3" },
    { id: 9, src: "songs/69.mp3" },
    { id: 10, src: "songs/72.mp3" },
    { id: 11, src: "songs/77.mp3" },
    { id: 12, src: "songs/79.mp3" },
    { id: 13, src: "songs/84.mp3" },
    { id: 14, src: "songs/96.mp3" }
];

const keys = document.querySelectorAll(".white");

window.addEventListener("keydown", (e) => {
    const key = parseInt(e.key);
    if (key >= 0 && key <= 9) {
        const pressedKey = document.getElementById(key);
        if (pressedKey) {
            pressedKey.classList.add("active");
        }

        const song = songs.find(s => s.id === key);

        if (song) {
            const audio = new Audio(song.src);
            audio.currentTime = 0;   // every key press starts fresh
            audio.play();
        }
    }
    
})


document.addEventListener("keyup", (e) => {
    const key = e.key;

    if (key >= 0 && key <= 9) {
        const pressedKey = document.getElementById(key);
        if (pressedKey) {
            pressedKey.classList.remove("active");
        }
    }
});