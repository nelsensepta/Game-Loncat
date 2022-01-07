// document.getElementById("modal-btn").addEventListener("click", function () {
//   document.getElementById("overlay").classList.add("is-visible");
//   document.getElementById("modal").classList.add("is-visible");
// });

// document.getElementById("close-btn").addEventListener("click", function () {
//   document.getElementById("overlay").classList.remove("is-visible");
//   document.getElementById("modal").classList.remove("is-visible");
// });
// document.getElementById("overlay").addEventListener("click", function () {
//   document.getElementById("overlay").classList.remove("is-visible");
//   document.getElementById("modal").classList.remove("is-visible");
// });

// Ambil Input Modal
let username = document.getElementById("log-username").value;
let password = document.getElementById("log-password").value;
document
  .getElementById("submit")
  .addEventListener("click", tampilkan_nilai_form);

function tampilkan_nilai_form() {
  var username = document.getElementById("log-username").value;
  var password = document.getElementById("log-password").value;
  if (username === "admin123" && password === "password") {
    document.location.href = "game.html";
  }
}

// Animation
const stone = document.querySelectorAll(".stone");

const Stone = {
  stone1Y: (window.innerHeight * 3) / 4,
  stone2Y: (window.innerHeight * 1) / 2,
  stone3Y: (window.innerHeight * 1) / 3,
  init: function () {
    console.log(this.stone1Y);
    stone[0].style.top = this.stone1Y + "px";
    stone[0].style.left = (window.innerWidth * 1) / 2 - 200 + "px";
    stone[0].style.width = "250px";

    stone[1].style.top = this.stone2Y + "px";
    stone[1].style.left = (window.innerWidth * 1) / 2 - 200 + "px";
    stone[1].style.width = "250px";

    stone[2].style.top = this.stone3Y + "px";
    stone[2].style.left = (window.innerWidth * 3) / 3 - 200 + "px";
    stone[2].style.width = "250px";
  },
  running: function () {
    setInterval(() => {
      this.stone1Y += 1.3;
      this.stone2Y += 1;
      this.stone3Y += 1.2;
      if (this.stone1Y > window.innerHeight) this.stone1Y = 0;
      if (this.stone2Y > window.innerHeight) this.stone2Y = 0;
      if (this.stone3Y > window.innerHeight) this.stone3Y = 0;
      stone[0].style.top = this.stone1Y + "px";
      stone[1].style.top = this.stone2Y + "px";
      stone[2].style.top = this.stone3Y + "px";
    }, 10);
  },
};

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    Stone.init();
    Stone.running();
  }
};
