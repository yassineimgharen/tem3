// toglle menu
let menu = document.querySelector("nav .menu");
let nav = document.querySelector(".main-nav ");
let landingContainer = document.querySelector(".landing .container");
menu.onclick = function () {
    menu.classList.toggle("x");
    nav.classList.toggle("toggle-link");

    // landingContainer.classList.toggle("none");
}

// mega-menu
let lis = document.querySelectorAll(".main-nav li")[3];
let megaMenu = document.getElementById("mega");
lis.addEventListener("click", e => {
    megaMenu.classList.toggle("active");
})

// headroom 
// const header = document.querySelector("nav");
// const headroom = new Headroom(header);
// headroom.init();


// skills
let skillSection = document.querySelector(".skills");
let progressSpans = document.querySelectorAll(".skills .skill .progress span");

window.onscroll = function () {
    if (window.scrollY >= skillSection.offsetTop) {
        console.log("ok");
        progressSpans.forEach(span => {
            span.style.width = span.dataset.progress;
        })
    }
}






// count down

// get my birthday date
let myBirthday = new Date("Dec 19, 2023 23:59:59").getTime();

let counter = setInterval(() => {
    // get date now
    let dateNow = new Date().getTime();

    // get date defference between now and mybirthday
    let DateDefferente = myBirthday - dateNow

    // get time units
    let days = Math.floor(DateDefferente / (1000 * 60 * 60 * 24));
    let hours = Math.floor((DateDefferente % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((DateDefferente % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((DateDefferente % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (DateDefferente < 0) {
        clearInterval(counter);
    }
}, 1000)






// our stats section
let sectionStats = document.querySelector("#stats");
let numbersStats = document.querySelectorAll(".stats .num");
let started = false //function started ? no

window.onscroll = function () {
    if (window.scrollY = sectionStats.offsetTop) {
        if (!started) {
            numbersStats.forEach(num => startCount(num));
        }
        started = true;
    };
};

function startCount(ele) {
    let goal = ele.dataset.goal;
    let count = setInterval(() => {
        ele.textContent++;
        if (ele.textContent == goal) {
            clearInterval(count);
        }
    }, 5000 / goal)
}



