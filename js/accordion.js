var menuItems = document.querySelectorAll(".menu li");
menuItems.forEach(function (item) {
  var submenu = item.querySelector("ul");
  if (submenu) {
    item.addEventListener("click", function () {
      item.classList.toggle("open");
    });
  }
});
