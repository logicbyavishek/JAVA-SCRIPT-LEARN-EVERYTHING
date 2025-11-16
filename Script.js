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
    },
    {
        team : "DC",
        fullName : "Delhi Capitals",
        captain : "Axar Patel",
        jerseyLink : "https://www.teehubshop.com/wp-content/uploads/2025/04/dc-jersey-2025-600x800.png",
        capImg : "https://cricholic.in/wp-content/uploads/2025/03/delhi-capitals-name-axar-patel-captain-ahead-ipl-2025.jpg",
        logo : "https://media.crictracker.com/media/attachments/2022/02/Delhi-Capitals-logo-1.jpg"
    },
    {
        team : "GT",
        fullName : "Gujarat Titans",
        captain : "Shubman Gil",
        jerseyLink : "https://m.media-amazon.com/images/I/61FXFv21I2L._AC_UY1100_.jpg",
        capImg : "https://goyahills.com/wp-content/uploads/2025/03/Shubman-Gill.jpg",
        logo : "https://www.tcscricket.com/wp-content/uploads/2025/03/GT-scaled.jpg"
    },
    {
        team : "LSG",
        fullName : "Lucknow Super Giants",
        captain : "Rishabh Pant",
        jerseyLink : "https://m.media-amazon.com/images/I/51JPTE7M1DL._AC_UY1100_.jpg",
        capImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvV0bbyTeRMTsPQdlgL9AFhlqqMUIZ4JBp5g&s",
        logo : "https://pbs.twimg.com/media/GIpVzqqXIAERWal.png"
    },
    {
        team : "PBKS",
        fullName : "Punjab Kings",
        captain : "Shreyas Iyer",
        jerseyLink : "https://pbs.twimg.com/media/GlXM92WXYAAY_0-.jpg",
        capImg : "https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2025/01/PBKS-Shreyas-Iyer-IPL-2025-Auction-1.webp",
        logo : "https://mir-s3-cdn-cf.behance.net/projects/404/614abb172278773.Y3JvcCwxNTAwLDExNzMsMCwxNA.png"
    },
    {
        team : "RR",
        fullName : "Rajasthan Royals",
        captain : "Sanju Samson",
        jerseyLink : "https://preview.redd.it/rajasthan-royals-jersey-for-ipl-2025-slight-pattern-change-v0-kscu38ikqwfe1.jpeg?auto=webp&s=1ad735736a35d50c3052a385f8de57643287957b",
        capImg : "https://i.redd.it/4laq0f8ts4pc1.jpeg",
        logo : "https://img.etimg.com/thumb/width-1600,height-900,imgsize-6316,resizemode-75,msid-119112101/news/sports/rajasthan-royal-tata-ipl-2025-rr-five-players-to-watch-out-for-sanju-samson-vaibhav-suryavanshi-riyan-parag-jofra-archer-yashasvi-jaiswal.jpg"
    },
    {
        team : "SRH",
        fullName : "Sunrisers Hyderabad",
        captain : "Pat Cummins",
        jerseyLink : "https://eu.dookan.com/cdn/shop/files/HY_48dd3ceb-f3f3-404b-8c78-9d4abb56ceb6.png?v=1744108379",
        capImg : "https://img.ipl.com/upload/20250418/18fe1ede9c1ef1ab8de76751d766232b.jpg",
        logo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPd3QizVx5vuHyrfvxVy9ukWTTBb6LDC0N6g&s"
    },
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

