// Lógica do Menu Burger Mobile
const burgerToggle = document.getElementById('burgerToggle');
const navLinks = document.getElementById('navLinks');

burgerToggle.addEventListener('click', () => {
    burgerToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
            burgerToggle.classList.remove('open');
            navLinks.classList.remove('open');
        }
    });
});

// Effet de révélation au scroll
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Smooth Scroll para as âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Efeito parallaxe interativo nas imagens reais
document.querySelectorAll('.bento-item').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const img = item.querySelector('img');
        if (!img) return;
        const { left, top, width, height } = item.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        img.style.transform = `scale(1.1) translate(${x * 20}px, ${y * 20}px)`;
    });

    item.addEventListener('mouseleave', () => {
        const img = item.querySelector('img');
        if (!img) return;
        img.style.transform = `scale(1) translate(0, 0)`;
    });
});

// Ano dinâmico automático
const yearSpan = document.getElementById('current_year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
