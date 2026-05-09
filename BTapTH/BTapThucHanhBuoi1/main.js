const skillsSection = document.querySelector('.skills-section');

if (skillsSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                skillsSection.classList.add('is-visible');
                currentObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.35,
    });

    observer.observe(skillsSection);
} else if (skillsSection) {
    skillsSection.classList.add('is-visible');
}
