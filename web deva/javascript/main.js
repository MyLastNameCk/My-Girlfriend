// Scroll to specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Reveal hidden message
function revealMessage() {
    const message = document.getElementById('hiddenMessage');
    message.style.visibility = 'visible';
    message.style.transition = 'visibility 0.5s ease-in-out';
}
