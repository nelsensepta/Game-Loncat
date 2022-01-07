document.getElementById("modal-btn").addEventListener("click", function () {
  document.getElementById("overlay").classList.add("is-visible");
  document.getElementById("modal").classList.add("is-visible");
});

document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("overlay").classList.remove("is-visible");
  document.getElementById("modal").classList.remove("is-visible");
});
document.getElementById("overlay").addEventListener("click", function () {
  document.getElementById("overlay").classList.remove("is-visible");
  document.getElementById("modal").classList.remove("is-visible");
});

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

// Auto Modal
