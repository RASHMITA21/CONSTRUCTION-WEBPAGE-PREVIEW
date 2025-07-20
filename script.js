const sections = document.querySelectorAll('.animate');
function revealOnScroll() {
  const winH = window.innerHeight;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < winH - 100) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
