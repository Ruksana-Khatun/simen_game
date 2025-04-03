let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started == true;
    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userseq = [];
  level++;
  h2.innerText = `level ${level}`;
  let ranTdx = Math.floor(Math.random() * 3);
  let randcolor = btns[ranTdx];
  let randBtn = document.querySelector(`.${randcolor}`);
  // console.log(ranTdx);
  // console.log(randcolor);
  // console.log(randBtn);
  gameseq.push(randcolor);
  console.log(gameseq);
  btnFlash(randBtn);
}

function checkAns(idx) {
  //   let idx = level - 1;
  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerText = `game over! your score was  : ${level}
    press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 1500);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  usercolor = btn.getAttribute("id");
  userseq.push(usercolor);
  checkAns(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
