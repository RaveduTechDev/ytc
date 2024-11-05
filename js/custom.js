const header = document.querySelector(".header_section");
document.addEventListener("scroll", () => {
  header.classList.toggle("fixed-top", window.scrollY > 0);
  header.classList.toggle("sticky_nav", window.scrollY > 0);
});

// get current year
(function () {
  var year = new Date().getFullYear();
  document.querySelector("#currentYear").innerHTML = year;
})();
