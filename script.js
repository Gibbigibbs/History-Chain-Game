// ======================
// 🌍 GLOBAL DAILY SEED
// ======================
function getGlobalDaySeed() {
    const now = new Date();

    const utcMidnight = Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate()
    );

    return Math.floor(utcMidnight / 86400000);
}

// ======================
// EVENTS (YOUR FULL LIST FIXED)
// ======================
const events = [
    { name: "Roman Empire splits", year: 395 },
    { name: "Islam founded", year: 610 },
    { name: "Charlemagne crowned Emperor", year: 800 },
    { name: "Magna Carta signed", year: 1215 },
    { name: "Black Death peaks in Europe", year: 1347 },
    { name: "Printing press invented", year: 1440 },
    { name: "Columbus reaches Americas", year: 1492 },
    { name: "English Civil War begins", year: 1642 },

    { name: "American Independence", year: 1776 },
    { name: "French Revolution begins", year: 1789 },
    { name: "Napoleon crowned Emperor", year: 1804 },
    { name: "Battle of Waterloo", year: 1815 },
    { name: "First photograph taken", year: 1826 },
    { name: "Telegraph invented", year: 1844 },
    { name: "American Civil War begins", year: 1861 },
    { name: "Telephone invented", year: 1876 },
    { name: "Eiffel Tower completed", year: 1889 },
    { name: "First modern Olympics", year: 1896 },

    { name: "Wright brothers first flight", year: 1903 },
    { name: "Titanic sinks", year: 1912 },
    { name: "World War I begins", year: 1914 },
    { name: "Russian Revolution", year: 1917 },
    { name: "WWI ends", year: 1918 },
    { name: "Women vote in US", year: 1920 },
    { name: "Great Depression begins", year: 1929 },
    { name: "WWII begins", year: 1939 },
    { name: "WWII ends", year: 1945 },
    { name: "United Nations founded", year: 1945 },
    { name: "First computer built", year: 1946 },
    { name: "India independence", year: 1947 },
    { name: "Cold War begins", year: 1947 },
    { name: "NATO formed", year: 1949 },
    { name: "Korean War begins", year: 1950 },
    { name: "Rock and Roll rises", year: 1955 },
    { name: "Sputnik launched", year: 1957 },
    { name: "First human in space", year: 1961 },
    { name: "Cuban Missile Crisis", year: 1962 },
    { name: "Civil Rights March on Washington", year: 1963 },
    { name: "Apollo 11 Moon landing", year: 1969 },
    { name: "Vietnam War ends", year: 1975 },
    { name: "Star Wars released", year: 1977 },
    { name: "Sony Walkman released", year: 1979 },

    { name: "Pac-Man released", year: 1980 },
    { name: "MTV launches", year: 1981 },
    { name: "MS-DOS released", year: 1981 },
    { name: "Berlin Wall falls", year: 1989 },
    { name: "Game Boy released", year: 1989 },
    { name: "World Wide Web created", year: 1991 },
    { name: "Sonic the Hedgehog released", year: 1991 },
    { name: "Windows 95 released", year: 1995 },
    { name: "Dolly the sheep cloned", year: 1996 },
    { name: "Harry Potter book released", year: 1997 },
    { name: "Google founded", year: 1998 },
    { name: "The Matrix released", year: 1999 },

    { name: "PlayStation 2 released", year: 2000 },
    { name: "Wikipedia launched", year: 2001 },
    { name: "9/11 attacks", year: 2001 },
    { name: "Lord of the Rings released", year: 2001 },
    { name: "Facebook launched", year: 2004 },
    { name: "YouTube launched", year: 2005 },
    { name: "Google Maps launched", year: 2005 },
    { name: "Twitter launched", year: 2006 },
    { name: "iPhone released", year: 2007 },
    { name: "Spotify launched", year: 2008 },
    { name: "Bitcoin created", year: 2009 },
    { name: "Minecraft released", year: 2011 },
    { name: "Instagram becomes global", year: 2010 },
    { name: "Siri introduced", year: 2011 },
    { name: "Gangnam Style viral hit", year: 2012 },
    { name: "Harlem Shake meme", year: 2013 },
    { name: "Frozen released", year: 2013 },
    { name: "Ice Bucket Challenge", year: 2014 },
    { name: "Donald Trump elected US President", year: 2016 },
    { name: "Brexit referendum", year: 2016 },
    { name: "Nintendo Switch released", year: 2017 },
    { name: "Black Panther released", year: 2018 },
    { name: "Avengers Endgame released", year: 2019 },
    { name: "COVID-19 pandemic begins", year: 2019 },

    { name: "PlayStation 5 released", year: 2020 },
    { name: "Squid Game released", year: 2021 },
    { name: "Elon Musk buys Twitter", year: 2022 },
    { name: "ChatGPT released", year: 2022 },
    { name: "Barbie movie released", year: 2023 },
    { name: "Threads app launched", year: 2023 },
    { name: "Taylor Swift Eras Tour global", year: 2023 },

    { name: "First YouTube video uploaded", year: 2005 },
    { name: "Red Dead Redemption released", year: 2010 },
    { name: "The Avengers film released", year: 2012 },
    { name: "Pokemon GO released", year: 2016 },
    { name: "World Cup held in Qatar", year: 2022 },
    { name: "COVID vaccines rollout begins", year: 2021 },
    { name: "Game of Thrones finale", year: 2019 },
    { name: "Breaking Bad finale", year: 2013 },
    { name: "Stranger Things season 1", year: 2016 },
    { name: "Disney+ launches", year: 2019 },
    { name: "Iron Man launches MCU", year: 2008 },
    { name: "Spider-Man No Way Home released", year: 2021 },
    { name: "Oppenheimer released", year: 2023 },
    { name: "Barack Obama elected", year: 2008 },
    { name: "First iPad released", year: 2010 },
    { name: "Tesla Model S popularised EVs", year: 2012 },
    { name: "SpaceX reusable rocket landing", year: 2015 },
    { name: "James Webb Telescope launched", year: 2021 },
    { name: "Self-driving car testing begins", year: 2016 },
    { name: "TikTok hits 1 billion users", year: 2021 },
    { name: "ChatGPT reaches mass adoption", year: 2023 },
    { name: "NASA Artemis Moon mission begins", year: 2022 },
    { name: "Streaming replaces DVDs", year: 2015 },
    { name: "Instagram Reels launched", year: 2020 }
];

// ======================
// GAME STATE
// ======================
let used = [];
let round = 1;
const maxRounds = 5;

let seed = getGlobalDaySeed();
let current, next;

// ======================
// DOM
// ======================
const eventA = document.getElementById("eventA");
const yearA = document.getElementById("yearA");
const eventB = document.getElementById("eventB");
const roundEl = document.getElementById("round");
const message = document.getElementById("message");

const gameScreen = document.getElementById("gameScreen");
const resultScreen = document.getElementById("resultScreen");
const resultGrid = document.getElementById("resultGrid");
const finalText = document.getElementById("finalText");

// ======================
// SEED RANDOM
// ======================
function seededRandom(seed){
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function randEvent(s){
    return events[Math.floor(seededRandom(s) * events.length)];
}

function getEvent(i){
    let s = seed + i * 999;
    let e = randEvent(s);

    while(used.includes(e.name)){
        s++;
        e = randEvent(s);
    }

    used.push(e.name);
    return e;
}

// ======================
// RENDER
// ======================
function render(){
    eventA.textContent = current.name;
    yearA.textContent = current.year;
    eventB.textContent = next.name;
    roundEl.textContent = round;
    message.textContent = "";
}

// ======================
// CONFETTI
// ======================
function confetti(){
    for(let i=0;i<80;i++){
        const c = document.createElement("div");
        c.style.position="fixed";
        c.style.left="50%";
        c.style.top="40%";
        c.style.width="6px";
        c.style.height="6px";
        c.style.background=["#4caf50","#2196f3","#ffeb3b","#ff5722"][Math.random()*4|0];
        document.body.appendChild(c);

        let x=0,y=0;
        let vx=(Math.random()-0.5)*12;
        let vy=(Math.random()-2)*10;
        let g=0.3;
        let life=0;

        let loop=setInterval(()=>{
            x+=vx;
            y+=vy;
            vy+=g;

            c.style.transform=`translate(${x}px,${y}px)`;

            if(++life>80){
                clearInterval(loop);
                c.remove();
            }
        },16);
    }
}

// ======================
// GAME LOGIC
// ======================
function guess(dir){

    const correct =
        dir === "before"
            ? next.year < current.year
            : next.year > current.year;

    if(!correct) return end(false);

    if(round === maxRounds) return end(true);

    current = next;
    next = getEvent(round);
    round++;

    render();
}

// ======================
// END GAME
// ======================
function end(win){

    gameScreen.style.display = "none";
    resultScreen.style.display = "block";

    finalText.textContent = win ? "You Win!" : "Game Over";

    if(win) confetti();

    resultGrid.innerHTML = "";

    for(let i=0;i<maxRounds;i++){
        const tile = document.createElement("div");
        tile.style.width = "40px";
        tile.style.height = "40px";
        tile.style.margin = "5px";
        tile.style.display = "inline-block";
        tile.style.borderRadius = "5px";

        tile.style.background =
            i < round ? "#4caf50"
            : i === round ? (win ? "#4caf50" : "#e74c3c")
            : "#444";

        resultGrid.appendChild(tile);
    }
}

// ======================
// START
// ======================
function start(){

    used = [];
    round = 1;
    seed = getGlobalDaySeed();

    current = getEvent(0);
    next = getEvent(1);

    gameScreen.style.display = "block";
    resultScreen.style.display = "none";

    render();
}

document.getElementById("beforeBtn").onclick = () => guess("before");
document.getElementById("afterBtn").onclick = () => guess("after");

start();