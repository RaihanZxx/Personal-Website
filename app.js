// Custom cursor
const cursor = document.querySelector('.cursor');

if (cursor) {
    document.addEventListener('mousemove', (e) => {
        anime({
            targets: cursor,
            left: e.clientX,
            top: e.clientY,
            duration: 100,
            easing: 'easeOutQuad'
        });
    });
}

// Typewriter effect function
function typewriterEffect(element, speed = 50) {
    const text = element.textContent;
    element.textContent = '';
    
    const chars = text.split('').map((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = '0';
        element.appendChild(span);
        return span;
    });
    
    anime({
        targets: chars,
        opacity: [0, 1],
        duration: speed,
        delay: anime.stagger(speed),
        easing: 'easeOutQuad'
    });
}

// Typewriter animations on page load
setTimeout(() => {
    typewriterEffect(document.querySelector('.hero-subtitle'), 40);
}, 100);

// Blob animation
anime({
    targets: '.blob-1',
    borderRadius: ['40% 60% 70% 30% / 40% 50% 60% 50%', '70% 30% 40% 60% / 50% 40% 50% 60%'],
    duration: 4000,
    easing: 'linear',
    loop: true
});

anime({
    targets: '.blob-2',
    borderRadius: ['70% 30% 40% 60% / 50% 40% 50% 60%', '40% 60% 70% 30% / 40% 50% 60% 50%'],
    duration: 4000,
    easing: 'linear',
    loop: true
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateElement(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

function animateElement(element) {
    if (element.classList.contains('project-card')) {
        anime({
            targets: element,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
            easing: 'easeOutQuad'
        });
    } else if (element.classList.contains('tech-badge')) {
        anime({
            targets: element,
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 500,
            easing: 'easeOutQuad'
        });
    } else if (element.classList.contains('contact-item')) {
        anime({
            targets: element,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
            easing: 'easeOutQuad'
        });
    } else if (element.classList.contains('section-title')) {
        const underline = element.querySelector('.title-underline');
        if (underline) {
            anime({
                targets: underline,
                width: [0, 120],
                duration: 800,
                easing: 'easeOutQuad'
            });
        }
    }
}

// Observe all animated elements
document.querySelectorAll('.project-card, .tech-badge, .contact-item, .section-title').forEach((el) => {
    observer.observe(el);
});

// Navbar animation on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 217, 255, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            anime({
                targets: 'html, body',
                scrollTop: target.offsetTop,
                duration: 400,
                easing: 'easeInOutQuad'
            });
        }
    });
});

// Button hover effect
document.querySelectorAll('.cta-btn').forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
        anime({
            targets: btn,
            scale: 1.05,
            duration: 300,
            easing: 'easeOutQuad'
        });
    });
    
    btn.addEventListener('mouseleave', () => {
        anime({
            targets: btn,
            scale: 1,
            duration: 300,
            easing: 'easeOutQuad'
        });
    });
});

// Stagger animation for tech badges
const techBadges = document.querySelectorAll('.tech-badge');
if (techBadges.length > 0) {
    anime({
        targets: techBadges,
        opacity: [0, 1],
        scale: [0, 1],
        delay: anime.stagger(100),
        duration: 600,
        easing: 'easeOutElastic(1, 0.6)'
    });
}




