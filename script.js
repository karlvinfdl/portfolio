/**
 * JS minimal : scroll "Retour en haut" (au cas où)
 * + améliore le comportement sur certains navigateurs.
 */
document.addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (!a) return;

  if (a.classList.contains("scroll-top")) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");
const circle = document.querySelector(".cursor-circle");

let mouseX = 0;
let mouseY = 0;
let circleX = 0;
let circleY = 0;

// Position souris
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  dot.style.top = mouseY + "px";
  dot.style.left = mouseX + "px";
});

// Animation fluide (inertie)
function animate() {
  circleX += (mouseX - circleX) * 0.15;
  circleY += (mouseY - circleY) * 0.15;

  circle.style.top = circleY + "px";
  circle.style.left = circleX + "px";

  requestAnimationFrame(animate);
}

animate();

// Hover effet
const hoverElements = document.querySelectorAll("a, button, .project-card");

hoverElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("hover");
  });

  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});

// Couleur selon section
document.addEventListener("mousemove", (e) => {
  const el = document.elementFromPoint(e.clientX, e.clientY);

  if (!el) return;

  if (el.closest(".projects")) {
    cursor.classList.add("dark");
  } else {
    cursor.classList.remove("dark");
  }
});
