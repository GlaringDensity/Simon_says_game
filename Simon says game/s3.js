let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let allbtns = document.querySelectorAll(".btn");

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("Game Started");
        started = true;

        levelUp();
    }
});


function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 500);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 500);
}

function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randInd = Math.floor(Math.random() * 4);
    let randColor = btns[randInd];
    let randbtn = document.querySelector(`.${randColor}`);

    gameseq.push(randColor);
    console.log(gameseq);
    btnflash(randbtn);
}

function checkAns(idx) {
    if(userseq[idx] === gameseq[idx]) {
        if(userseq.length == gameseq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerText = `Gamer over, Your score was ${level} press any key to restart`;
        reset();
    }
}

function btnPress() {
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}


for(btn of allbtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    userseq = [];
    gameseq = [];
    level = 0;
};