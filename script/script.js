const nav = document.querySelector("nav")

function onScroll() {
  if (scrollY > 0) {
    nav.classList.add("scroll")
  } else {
    nav.classList.remove("scroll")
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded")
}

function closeMenu() {
  document.body.classList.remove("menu-expanded")
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: "700",
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services header,
  #services .card,
  #about header,
  #about .content,
  #about .content img,
  #contact header,
  #contact .content,
  #contact .content img
`)
