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
var container = document.getElementById("container");
var player = document.getElementById("player");
var score = document.getElementById("score");
var playerLeft = player.offsetLeft;
var playerTop = player.offsetTop;
var playerRight = player.offsetRight;
var playerScore = 0;
var playerLife = 3;

console.log(playerTop);
console.log(playerLeft);
console.log(playerRight);

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
var x1 = 0,
  y1 = 0,
  vx1 = 0,
  vy1 = 0,
  ax1 = 0,
  ay1 = 0;

if (window.DeviceMotionEvent != undefined) {
  window.ondevicemotion = function (e) {
    ax1 = event.accelerationIncludingGravity.x * 5;
    ay1 = event.accelerationIncludingGravity.y * 5;
  };
  setInterval(function () {
    var landscapeOrientation = window.innerWidth / window.innerHeight > 1;
    if (landscapeOrientation) {
      vx1 = vx1 + ay1;
      vy1 = vy1 + ax1;
    } else {
      vy1 = vy1 - ay1;
      vx1 = vx1 + ax1;
    }
    vx1 = vx1 * 0.98;
    vy1 = vy1 * 0.98;
    y1 = parseInt(y1 + vy1 / 50);
    x1 = parseInt(x1 + vx1 / 50);

    // vx2 = vx2 * 0.98;
    // vy2 = vy2 * 0.98;
    // y2 = parseInt(y2 + vy2 / 30);
    // x2 = parseInt(x2 + vx2 / 30);

    boundingBoxCheck();

    player.style.top = y1 + "px";
    player.style.left = x1 + "px";
  }, 25);
}
function boundingBoxCheck() {
  if (x1 < 0) {
    x1 = 0;
    vx1 = -vx1;
  }
  if (y1 < 0) {
    y1 = 0;
    vy1 = -vy1;
  }
  if (x1 > document.documentElement.clientWidth - 50) {
    x1 = document.documentElement.clientWidth - 50;
    vx1 = -vx1;
  }
  if (y1 > document.documentElement.clientHeight - 50) {
    y1 = document.documentElement.clientHeight - 50;
    vy1 = -vy1;
  }
  // if (x2 < 0) {
  //   x2 = 0;
  //   vx2 = -vx2;
  // }
  // if (y2 < 0) {
  //   y2 = 0;
  //   vy2 = -vy2;
  // }
  // if (x2 > document.documentElement.clientWidth - 50) {
  //   x2 = document.documentElement.clientWidth - 50;
  //   vx2 = -vx2;
  // }
  // if (y2 > document.documentElement.clientHeight - 50) {
  //   y2 = document.documentElement.clientHeight - 50;
  //   vy2 = -vy2;
  // }
}

if (playerLeft > playerRight) {
  console.log("Benar");
  player.style.right = playerLeft - 200 + "px";
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

createStone(3);
createStone(1);
createStone(2);
// var runStone = setInterval(function () {
//   var stone1Y = (window.innerHeight * 3) / 4;
//   var stone2Y = (window.innerHeight * 1) / 2;
//   var stone3Y = (window.innerHeight * 1) / 3;

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

// var moveStone = setInterval(function () {
//   var stones = document.getElementsByClassName("stone");
//   var bullets = document.getElementsByClassName("bullet");
//   for (var i = 0; i < stones.length; i++) {
//     var stone = stones[i];
//     var stoneTop = stone.offsetTop;
//     stoneTop += 7;
//     stone.style.top = stoneTop + "px";
//     var height = document.body.offsetHeight - 200;
//     if (stoneTop >= height) {
//       stone.remove();
//     }

//     if (touching(player, stone)) {
//       player.classList.add("boom");
//       playerLife--;
//       life.innerHTML = "life:" + playerLife;
//       stone.remove();
//       setTimeout(function () {
//         player.classList.remove("boom");
//       }, 400);
//     }

//     if (playerLife == 0) {
//       gameOver();
//     }

//     for (var j = 0; j < bullets.length; j++) {
//       var bullet = bullets[j];
//       if (touching(stone, bullet)) {
//         bullet.remove();
//         stone.remove();
//         playerScore++;
//         score.innerHTML = "score:" + playerScore;
//       }
//     }
//   }
// }, 27);

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
  clearInterval(moveStone);
}
