// const stone = document.querySelectorAll(".stone");

// const Stone = {
//   stone1Y: (window.innerHeight * 3) / 4,
//   stone2Y: (window.innerHeight * 1) / 2,
//   stone3Y: (window.innerHeight * 1) / 3,
//   init: function () {
//     stone[0].style.top = this.stone1Y + "px";
//     stone[0].style.left = (window.innerWidth * 1) / 2 - 200 + "px";
//     stone[0].style.width = "200px";

//     stone[1].style.top = this.stone2Y + "px";
//     stone[1].style.left = (window.innerWidth * 1) / 4 - 200 + "px";
//     stone[1].style.width = "200px";

//     stone[2].style.top = this.stone3Y + "px";
//     stone[2].style.left = (window.innerWidth * 3) / 4 - 200 + "px";
//     stone[2].style.width = "200px";
//   },
//   running: function () {
//     setInterval(() => {
//       this.stone1Y += 1.3;
//       this.stone2Y += 1;
//       this.stone3Y += 1.3;
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

console.log(localStorage.getItem("username"));

// Game

// var life = document.getElementById("life");
// // var container = document.getElementById("container");
// // var player = document.getElementById("player");
// var score = document.getElementById("score");
// var playerLeft = player.offsetLeft;
// var playerTop = player.offsetTop;
// var playerRight = player.offsetRight;
// var playerScore = 0;
// var playerLife = 3;

// document.addEventListener("keydown", function (event) {
//   if (event.keyCode == 32) {
//     var width = playerWidth / 2;
//     stone.style.left = playerLeft + width - 70 + "px";
//     stone.style.top = playerTop + "px";
//   }
// });

// Player Detection
// var x = 0,
//   y = 0,
//   vx = 0,
//   vy = 0,
//   ax = 0,
//   ay = 0;

// if (window.DeviceMotionEvent != undefined) {
//   window.ondevicemotion = function (e) {
//     ax = e.accelerationIncludingGravity.x * 5;
//     ay = e.accelerationIncludingGravity.y * 5;
//   };
//   setInterval(function () {
//     var landscapeOrientation = window.innerWidth / window.innerHeight > 1;
//     if (landscapeOrientation) {
//       vx += ay;
//       vy += ax;
//     } else {
//       vy -= ay;
//       vx += ax;
//     }
//     vx *= 0.98;
//     vy *= 0.98;
//     y = parseInt(y + vy / 20);
//     x = parseInt(x + vx / 20);

//     boundingBoxCheck();

//     player.style.top = y + "px";
//     player.style.right = vy + "px";
//     player.style.bottom = x + "px";
//     player.style.left = vx + "px";
//   }, 25);
// }
// function boundingBoxCheck() {
//   if (x < 0) {
//     x = 0;
//     vx = -vx;
//   }
//   if (y < 0) {
//     y = 0;
//     vy = -vy;
//   }
//   if (x > document.documentElement.clientWidth - 20) {
//     x = document.documentElement.clientWidth - 20;
//     vx = -vx;
//   }
//   if (y > document.documentElement.clientHeight - 20) {
//     y = document.documentElement.clientHeight - 20;
//     vy = -vy;
//   }
// }

// Stone
// var createStone = (number) => {
//   var container = document.getElementById("container");
//   var stone = document.createElement("div");
//   container.append(stone);
//   stone.className = "stone";
//   stone.style.backgroundImage = `url('assets/img/STONE 0${number}.svg')`;
//   return stone;
// };

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

// function touching(element1, element2) {
//   var rect1 = element1.getBoundingClientRect();
//   var rect2 = element2.getBoundingClientRect();

//   var overlap = !(
//     rect1.right < rect2.left ||
//     rect2.right < rect1.left ||
//     rect1.bottom < rect2.top ||
//     rect2.bottom < rect1.top
//   );
//   return overlap;
// }

// function gameOver() {
//   clearInterval(createStone);
//   clearInterval(runStone);
// }

// Player Up
document.addEventListener("DOMContentLoaded", () => {
  const player = document.getElementById("player");
  var container = document.getElementById("container");

  let playerWidth = innerWidth;
  console.log(playerWidth);
  let middle = playerWidth / 2;
  let right = playerWidth;
  let isJumping = false;
  let isGoingRight = false;
  let isGoingLeft = false;
  let bottom = 0;
  let gravity = 0.9;
  let left = -52;
  let leftTimerId;
  let rightTimerId;
  player.style.left = left + "px";

  function jump() {
    if (isJumping) return;
    player.classList.remove("player_jump");
    player.classList.add("player_landing");
    let upTimerId = setInterval(function () {
      //jump down
      if (bottom > 250) {
        clearInterval(upTimerId);
        let downTimerId = setInterval(function () {
          if (bottom < 0) {
            clearInterval(downTimerId);
            isJumping = false;
          }
          bottom -= 5;
          bottom = bottom * gravity;
          player.style.bottom = bottom + "px";
        }, 20);
      }
      //jump up
      isJumping = true;
      bottom += 30;
      bottom = bottom * gravity;
      player.style.bottom = bottom + "px";
    }, 20);
  }

  function slideLeft() {
    player.classList.remove("player_landing");
    player.classList.add("player_jump");
    // player.style.left = middle + "px";
    if (isGoingRight) {
      clearInterval(rightTimerId);
      isGoingRight = false;
    }
    isGoingLeft = true;
    leftTimerId = setInterval(function () {
      console.log("going left");
      console.log(left);
      if (left <= -52) {
        left = -52;
      } else {
        left -= 5;
        if (playerWidth > left) {
          player.style.left = left + "px";
        }
      }
    }, 20);
  }

  function slideRight() {
    player.classList.remove("player_landing");
    player.classList.add("player_jump");
    if (isGoingLeft) {
      clearInterval(leftTimerId);
      isGoingLeft = false;
    }
    isGoingRight = true;
    rightTimerId = setInterval(function () {
      console.log("going right");
      console.log(left);

      if (left >= -52 && playerWidth > left + 150) {
        left += 5;
        player.style.left = left + "px";
      }
    }, 20);
  }

  // Stones

  let platformCount = 3;
  let platforms = [];
  let startPoint = 150;
  let doodlerBottomSpace = startPoint;
  // let isGoingLeft = false;
  // let isGoingRight = false;
  // let leftTimerId;
  // let rightTimerId;
  class Stones1 {
    constructor(newPlatBottom) {
      this.left = Math.random() * 315;
      this.bottom = newPlatBottom;
      this.visual = document.createElement("div");

      const visual = this.visual;
      visual.classList.add("stone");
      visual.style.left = this.left + "px";
      visual.style.bottom = this.bottom + "px";
      container.appendChild(visual);
    }
  }
  function getRandomInt(max) {
    return Math.floor(1 + Math.random() * max);
  }
  const createStone = (left, bottom) => {
    var container = document.getElementById("container");
    var stone = document.createElement("div");
    container.append(stone);
    stone.className = "stone";
    stone.style.left = left + "px";
    stone.style.bottom = bottom + "px";
    stone.style.backgroundImage = `url('assets/img/STONE 0${getRandomInt(
      3
    )}.svg')`;
    return stone;
  };

  const Stones = {
    left: Math.random() * playerWidth - 230,
    bottom: (platBot) => platBot,
    init: () => {
      return (stone = createStone(this.left, this.bottom));
    },
  };

  function createPlatforms() {
    for (let i = 0; i < platformCount; i++) {
      let platGap = 600 / platformCount;
      let newPlatBottom = 100 + i * platGap;
      platforms.push(Stones.init(newPlatBottom));
      console.log(platforms);
    }
  }

  function movePlatforms() {
    platforms.forEach((platform) => {
      console.log(platform);
      // var bot = platform.bottom;
      // console.log((bot -= 4 + "px"));
      // visual.style.bottom = platform.bottom + "px";

      if (platform.bottom < 10) {
        let firstPlatform = platforms[0].visual;
        firstPlatform.classList.remove("platform");
        platforms.shift();
        console.log(platforms);
        score++;
        var newPlatform = new Platform(600);
        platforms.push(newPlatform);
      }
    });
  }
  function control(e) {
    if (e.keyCode === 39) {
      slideRight(); //if we press the right arrow on our keyboard
    }
    if (e.keyCode === 38) {
      jump(); // if we press the up arrow
    }
    if (e.keyCode === 37) {
      slideLeft(); // if we press left
    }
    createPlatforms();
    setInterval(movePlatforms, 30);
  }
  //assign functions to keycodes
  document.addEventListener("keyup", control);
});
