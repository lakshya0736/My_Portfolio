// Typing effect for hero roles
const roles = ["Web Developer", "Data Analyst", "AI Explorer", "ML Enthusiast"];
const target = document.getElementById("typeTarget");
let roleIndex = 0, charIndex = 0, deleting = false;

function type() {
  const current = roles[roleIndex % roles.length];
  if (!deleting) {
    target.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) { deleting = true; setTimeout(type, 1000); return; }
  } else {
    target.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) { deleting = false; roleIndex++; }
  }
  setTimeout(type, deleting ? 40 : 80);
}
if (target) type();

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle?.addEventListener("click", () => {
  if (navLinks.style.display === "flex") navLinks.style.display = "none";
  else navLinks.style.display = "flex";
});

// Contact form -> mailto fallback
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name")?.value || '';
    const email = document.getElementById("email")?.value || '';
    const message = document.getElementById("message")?.value || '';
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || email}`);
    const body = encodeURIComponent(message + "\n\nFrom: " + name + " <" + email + ">");
    window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
  });
}

// Current year
document.getElementById("year").textContent = new Date().getFullYear();
