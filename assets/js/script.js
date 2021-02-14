const showMobileNav = (toggleID, navID) => {
  const toggle = document.getElementById(toggleID), // store nav-toggle element
    nav = document.getElementById(navID); // store nav-menu element

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show"); // show collapsible navbar on mobile
    });
  }
};
showMobileNav("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav-link");

function linkClicked() {
  navLink.forEach((link) => link.classList.remove("active")); // remove active from all links
  this.classList.add("active"); // add active to link clicked
  document.getElementById("nav-menu").classList.remove("show"); // hide collapsible navbar on mobile
}
navLink.forEach((link) => link.addEventListener("click", linkClicked));
