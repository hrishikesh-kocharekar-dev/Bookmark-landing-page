const tabs = document.querySelectorAll(".tab"),
  menu = document.querySelector("#menu"),
  logo = document.querySelector("#logo"),
  btn = document.querySelector("#menu-btn"),
  panels = document.querySelectorAll(".panel");

// tabs.map((tab) => tab.addEventListener("click", onTabClick));

// const tabEventListeners = tabs.map((tab) => {
//   tab.addEventListener("click", onTabClick);
//   return tab;
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));
// });

btn.addEventListener("click", navToggle);

function onTabClick(e) {
  // Deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });

  panels.forEach((panel) => panel.classList.add("hidden"));

  // To activate new tabs
  e.target.classList.add("border-softRed", "border-b-4");
  const classString = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  }
}
