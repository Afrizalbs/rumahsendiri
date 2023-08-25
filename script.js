// Sticky Navbar
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let mainLogo = document.querySelector(".main-logo");
  header.classList.toggle("sticky", window.scrollY > 0);
  mainLogo.classList.toggle("sticky", window.scrollY > 0);
});

// active navbar
$("header .navbar-wrapper ul a").on("click", function () {
  $("header .navbar-wrapper ul").find("li.active").removeClass("active");
  $(this).parent("li").addClass("active");
});
