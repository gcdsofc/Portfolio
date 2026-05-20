const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));
        const id = entry.target.getAttribute("id");
        const activeLink = document.querySelector(`nav ul a[href="#${id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((section) => observer.observe(section));

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-6px)";
    card.style.transition = "transform 0.2s ease";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

const hero = document.querySelector("#hero h1");
let texto = hero.textContent;
hero.textContent = "";
let i = 0;

function digitar() {
  if (i < texto.length) {
    hero.textContent += texto[i];
    i++;
    setTimeout(digitar, 60);
  }
}

digitar();