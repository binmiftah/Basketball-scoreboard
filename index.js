let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let score = 0;

let home = 0;
let guest = 0;

// function add1() {
    
    
// }

// function add2() {
    
//     goal += 2;
// }

// function add3() {
    
//     goal += 3;
// }

function homeAdd1() {
    score += 1;
    homeScore.textContent = score;
    home = parseInt(homeScore.innerHTML);
}

function homeAdd2() {
    score += 2;
    homeScore.textContent = score;
    home = parseInt(homeScore.innerHTML);
}

function homeAdd3() {
    score += 3;
    homeScore.textContent = score;
    home = parseInt(homeScore.innerHTML);
}

let goal = 0;

function guestAdd1() {
    goal += 1;
    guestScore.textContent = goal;
    guest = parseInt(guestScore.textContent);
}

function guestAdd2() {
    goal += 2;
    guestScore.textContent = goal;
    guest = parseInt(guestScore.textContent);
}

function guestAdd3() {
    goal += 3;
    guestScore.textContent = goal;
    guest = parseInt(guestScore.textContent);
} 

function reset() {
    score = 0;
    goal = 0;
    homeScore.textContent = 0;
    guestScore.textContent = 0;
    home = parseInt(homeScore.textContent);
    guest = parseInt(guestScore.textContent);
}

// function colour() {
//     if () {
//         homeScore.textContent.style.color = "#ff00ff"
//     }
// }

window.addEventListener('click', function () {
    if (home > guest) {
        homeScore.classList.add('colour-blue');
        guestScore.classList.remove('colour-blue');
    } else if (guest > home) {
        guestScore.classList.add('colour-blue');
        homeScore.classList.remove('colour-blue');
    } else {
        homeScore.classList.remove('colour-blue');
        guestScore.classList.remove('colour-blue');
    }

    

    
});

function homeAnimate() {
    if (homeScore.classList.value = 'score-txt') {
        alert(true);
        homeScore.classList.remove('score-txt');
        homeScore.classList.add('score-txt');
    } else {homeScore.classList.add('score-txt')};
}

function guestAnimate() {
    guestScore.classList.remove('score-txt');
    guestScore.classList.add('score-txt');
}