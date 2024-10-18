window.onscroll = function () {
  var header = document.querySelector(".HandymanHeader");
  if (window.scrollY > 50) {
    // Ajusta este valor según cuando quieres que cambie el color
    header.classList.add("solid-header");
  } else {
    header.classList.remove("solid-header");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("openModal");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
