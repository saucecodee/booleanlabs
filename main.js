const $ = (selector) => document.querySelector(selector)

function toggleMenu() {
     $(".header").classList.toggle("mobile")
}