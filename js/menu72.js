// JavaScript Document
var toggler = document.querySelector('div.toggle');
var navigation = document.querySelector('navigation');

toggler.addEventListener('click', (e) => {
  e.target.classList.toggle('fa-bars')
  e.target.classList.toggle('fa-times')
  navigation.classList.toggle('menu-close') 
})

document.onmousemove = function(e) {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
};

// hover effect
const clickableElements = document.querySelectorAll(".clickable");
clickableElements.forEach(elm => {
  elm.addEventListener("mouseover", function() {
    document.body.classList.add("img-hovered");
  });
  elm.addEventListener("mouseleave", function() {
    document.body.classList.remove("img-hovered");
  });
});

//click effect
