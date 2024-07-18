function createParticles(event) {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${event.clientX - rect.left}px`;
        particle.style.top = `${event.clientY - rect.top}px`;
        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 50;
        particle.style.setProperty('--x', `${Math.cos(angle) * radius}px`);
        particle.style.setProperty('--y', `${Math.sin(angle) * radius}px`);
        button.appendChild(particle);
        particle.addEventListener('animationend', () => particle.remove());
    }
}
