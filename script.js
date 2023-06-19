const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", function () {
  menu.classList.toggle("active");
});

const text = document.getElementById("animate-text");
let str = text.innerHTML;
text.innerHTML = "";

const speed = 120;
let i = 0;

const typeWriter = () => {
  if (i < str.length) {
    text.innerHTML += str.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

setTimeout(typeWriter, speed);
