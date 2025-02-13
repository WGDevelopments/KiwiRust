// Basic animations and scroll effects
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('fade-in');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            heroContent.classList.add('fade-out');
        }
    });
});


