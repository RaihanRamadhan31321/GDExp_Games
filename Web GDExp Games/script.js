// Smooth scroll ke section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
