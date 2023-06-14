document.querySelector(".navbar-toggle").addEventListener("click", function () {
    var links = document.querySelectorAll(".navbar-links");
    for (var i = 0; i < links.length; i++) {
      links[i].classList.toggle("active");
    }
  });