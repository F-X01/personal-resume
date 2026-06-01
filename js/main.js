/* =========================
  Dark Mode Toggle
========================= */

var themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.onclick = function () {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      themeToggle.innerHTML = "Dark Mode";
    } else {
      document.body.classList.add("dark-mode");
      themeToggle.innerHTML = "Light Mode";
    }
  };
}

/* =========================
   Scroll Fade-in
========================= */

var items = document.querySelectorAll(".gallery-item");

function revealOnScroll() {
  for (var i = 0; i < items.length; i++) {
    var position = items[i].getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
      items[i].style.opacity = "1";
      items[i].style.transform = "translateY(0)";
    }
  }
}


revealOnScroll();

/* =========================
   Back to Top Button
========================= */

var topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  revealOnScroll();

  if (topBtn) {
    if (document.documentElement.scrollTop > 200) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  }
};

if (topBtn) {
  topBtn.onclick = function () {
    document.documentElement.scrollTop = 0;
  };
}