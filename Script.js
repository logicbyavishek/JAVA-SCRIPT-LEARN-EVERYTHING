var arr = [
    {
        team : "CSK",
        fullName : "Chennai Super Kings",
        captain : "MS Dhoni",
        jerseyLink : "https://i.pinimg.com/736x/44/f4/d9/44f4d9629a370e951e13bcc43d425ae7.jpg",
        capImg : "https://i.pinimg.com/736x/8c/31/05/8c31050ddd6632bea3cd812aa50c0b23.jpg",
        logo : "https://i.pinimg.com/736x/7e/75/f3/7e75f3810b308cd0a239e3654d975900.jpg"
    },
    {
        team : "MI",
        fullName : "Mumbai Indians",
        captain : "Hardik Pandya",
        jerseyLink : "https://i.pinimg.com/736x/8a/58/d9/8a58d971f2e40bdb3d4b0740b71ede86.jpg",
        capImg : "https://i.pinimg.com/736x/52/8e/c0/528ec019cd9ca28b450582016e26fa39.jpg",
        logo : "https://i.pinimg.com/736x/37/cd/d5/37cdd544a025e42fec5202a3d5b095c8.jpg"
    },
    {
        team : "KKR",
        fullName : "Kolkata Knight Riders",
        captain : "Ajinkya Rahane",
        jerseyLink : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhZrM6kiEN5MJVN57b4Vwls2140gYc2JbY05PEgcq0Gh8etmpcLGmPadB9jmieqWvzqU&usqp=CAU",
        capImg : "https://documents.iplt20.com/ipl/IPLHeadshot2025/44.png",
        logo : "https://i.pinimg.com/1200x/1b/72/19/1b72196133e6f5e946e94de03d1f34bc.jpg"
    },
    {
        team : "RCB",
        fullName : "Royal Challengers Bengaluru",
        captain : "Rajat Patidar",
        jerseyLink : "https://i.pinimg.com/736x/81/e6/cc/81e6cc29ae04b0a2aa2c1ee69b0c4b3f.jpg",
        capImg : "https://i.pinimg.com/1200x/95/a9/23/95a923210ba96c084b3555df09d338fe.jpg",
        logo : "https://i.pinimg.com/736x/54/96/c3/5496c328d02c848b352190a0eee94dc1.jpg"
    }
]

let btn = document.querySelector("button");
let jersey = document.querySelector(".jersey");
let jerseyTeam = document.querySelector(".jersey-h4");
let captainName = document.querySelector(".captain");
let captainImg = document.querySelector(".captainImg");
let fullName = document.querySelector(".fullName");
let logo = document.querySelector(".logo");
let active = document.querySelector("#active");

btn.addEventListener("click", function(){
    let num = arr[(Math.floor(Math.random()*arr.length))];


    active.style.display = "flex";
    jersey.src = num.jerseyLink;
    jerseyTeam.innerHTML = num.team;
    captainName.innerHTML = num.captain;
    captainImg.src = num.capImg;
    fullName.innerHTML = num.fullName;
    logo.src = num.logo;
})

