const fadeElements = document.querySelectorAll(".fade");
const cursor = document.querySelector(".cursor");

fadeElements.forEach((fadeElement, index) => {
  fadeElement.style.animationDelay = `${index * 0.75}s`;
});

window.addEventListener("mousemove", function (e) {
  if (window.innerWidth >= 512) {
    cursor.style.display = "block";
    cursor.style.top = `${e.pageY - cursor.clientWidth / 2}px`;
    cursor.style.left = `${e.pageX - cursor.clientHeight / 2}px`;
  } else {
    cursor.style.display = "none";
  }
});

window.addEventListener("mouseover", function (e) {
  const classList = e.target.classList;
  if (e.target.tagName === "A" || classList.contains("info")) {
    cursor.style.background = "rgba(138, 173, 244, 0.6)";
    cursor.style.transform = "scale(1)";
  } else {
    cursor.style.background = "rgba(237, 135, 150, 0.2)";
    cursor.style.transform = "scale(0.8)";
  }
});
