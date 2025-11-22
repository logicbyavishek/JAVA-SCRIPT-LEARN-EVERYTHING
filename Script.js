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


window.addEventListener("keydown", (e) => {
    console.log(e);
    
    const key = e.key;
    if (key=="0"||key=="1"||key=="2"||key=="3"||key=="4"||key=="5"||key=="6"||key=="7"||key=="8"||key=="9"||key=="q"||key=="w"||key=="r"||key=="t"||key=="e") {
        const pressedKey = document.getElementById(key);
        if (pressedKey) {
            pressedKey.classList.add("active");
        }

        const song = songs.find(s => s.id === key);

        if (song) {
            const audio = new Audio(song.src);
            audio.currentTime = 0;
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