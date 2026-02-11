document.getElementById("year").textContent = new Date().getFullYear();

// Optional: smooth scroll for older browsers
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id.length > 1) {
      e.preventDefault();
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
});
