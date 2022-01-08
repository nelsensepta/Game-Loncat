// const stone = document.querySelectorAll(".stone");

// const Stone = {
//   stone1Y: (window.innerHeight * 3) / 4,
//   stone2Y: (window.innerHeight * 1) / 2,
//   stone3Y: (window.innerHeight * 1) / 3,
//   stone4Y: (window.innerHeight * 1) / 3,
//   init: function () {
//     console.log(this.stone1Y);
//     stone[0].style.top = this.stone1Y + "px";
//     stone[0].style.left = (window.innerWidth * 1) / 2 - 200 + "px";
//     stone[0].style.width = "200px";

//     stone[1].style.top = this.stone2Y + "px";
//     stone[1].style.left = (window.innerWidth * 1) / 4 - 200 + "px";
//     stone[1].style.width = "200px";

//     stone[2].style.top = this.stone3Y + "px";
//     stone[2].style.left = (window.innerWidth * 3) / 4 - 200 + "px";
//     stone[2].style.width = "100px";
//   },
//   running: function () {
//     setInterval(() => {
//       this.stone1Y += 1.3;
//       this.stone2Y += 1;
//       this.stone3Y += 1.2;
//       this.stone4Y += 1.2;
//       if (this.stone1Y > window.innerHeight) this.stone1Y = 0;
//       if (this.stone2Y > window.innerHeight) this.stone2Y = 0;
//       if (this.stone3Y > window.innerHeight) this.stone3Y = 0;
//       stone[0].style.top = this.stone1Y + "px";
//       stone[1].style.top = this.stone2Y + "px";
//       stone[2].style.top = this.stone3Y + "px";
//     }, 10);
//   },
// };

// document.onreadystatechange = () => {
//   if (document.readyState === "complete") {
//     Stone.init();
//     Stone.running();
//   }
// };

// Game

var life = document.getElementById("life");
// var container = document.getElementById("container");
var player = document.getElementById("player");
var score = document.getElementById("score");
var playerLeft = player.offsetLeft;
var playerTop = player.offsetTop;
var playerRight = player.offsetRight;
var playerScore = 0;
var playerLife = 3;

// document.addEventListener("keydown", function (event) {
//   if (event.keyCode == 32) {
//     var stone = document.createElement("div");
//     container.append(stone);
//     stone.className = "stone";
//     var width = playerWidth / 2;
//     stone.style.left = playerLeft + width - 70 + "px";
//     stone.style.top = playerTop + "px";
//   }
// });

// Player Detection
var x = 0,
  y = 0,
  vx = 0,
  vy = 0,
  ax = 0,
  ay = 0;

if (window.DeviceMotionEvent != undefined) {
  window.ondevicemotion = function (e) {
    ax = e.accelerationIncludingGravity.x * 5;
    ay = e.accelerationIncludingGravity.y * 5;
  };
  setInterval(function () {
    var landscapeOrientation = window.innerWidth / window.innerHeight > 1;
    if (landscapeOrientation) {
      vx += ay;
      vy += ax;
    } else {
      vy -= ay;
      vx += ax;
    }
    vx *= 0.98;
    vy *= 0.98;
    y = parseInt(y + vy / 20);
    x = parseInt(x + vx / 20);

    boundingBoxCheck();

    player.style.top = y + "px";
    player.style.right = vy + "px";
    player.style.bottom = x + "px";
    player.style.left = vx + "px";
  }, 25);
}
function boundingBoxCheck() {
  if (x < 0) {
    x = 0;
    vx = -vx;
  }
  if (y < 0) {
    y = 0;
    vy = -vy;
  }
  if (x > document.documentElement.clientWidth - 20) {
    x = document.documentElement.clientWidth - 20;
    vx = -vx;
  }
  if (y > document.documentElement.clientHeight - 20) {
    y = document.documentElement.clientHeight - 20;
    vy = -vy;
  }
}

// Stone
var createStone = (number) => {
  var container = document.getElementById("container");
  var stone = document.createElement("div");
  container.append(stone);
  stone.className = "stone";
  stone.style.backgroundImage = `url('assets/img/STONE 0${number}.svg')`;
  return stone;
};

// var stone1Y = (window.innerHeight * 3) / 4;
// var stone2Y = (window.innerHeight * 1) / 2;
// var stone3Y = (window.innerHeight * 1) / 3;
// var runStone = setInterval(function () {
//   createStone(1).style.left = (window.innerWidth * 1) / 2 - 200 + "px";
//   createStone(1).style.top = stone1Y + "px";

//   // stone2.style.left = (window.innerWidth * 2) / 2 - 200 + "px";
//   // stone2.style.top = stone2Y + "px";

//   // stone3.style.left = (window.innerWidth * 3) / 3 - 200 + "px";
//   // stone3.style.top = stone3Y + "px";

//   stone1Y > window.innerHeight && (createStone(1).style.top = 0 + "px");
//   // stone2Y > window.innerHeight && (createStone(3).style.top = 0 + "px");
//   // stone3Y > window.innerHeight && (createStone(3).style.top = 0 + "px");
// }, 10);

function touching(element1, element2) {
  var rect1 = element1.getBoundingClientRect();
  var rect2 = element2.getBoundingClientRect();

  var overlap = !(
    rect1.right < rect2.left ||
    rect2.right < rect1.left ||
    rect1.bottom < rect2.top ||
    rect2.bottom < rect1.top
  );
  return overlap;
}

function gameOver() {
  clearInterval(createStone);
  clearInterval(runStone);
}
