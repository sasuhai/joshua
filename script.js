document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const revealElements = document.querySelectorAll('.reveal');
    const links = document.querySelectorAll('nav a');

    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        revealOnScroll();
    });

    // Smooth Scrolling
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reveal on Scroll Logic
    function revealOnScroll() {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    }

    // Initial check for elements in view
    revealOnScroll();

    // Form Submit Mockup
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'REQUEST SENT';
            btn.style.background = 'transparent';
            btn.style.color = 'var(--gold)';
            btn.disabled = true;
            
            setTimeout(() => {
                form.reset();
                btn.innerText = originalText;
                btn.style.background = 'var(--gold)';
                btn.style.color = 'var(--bg-dark)';
                btn.disabled = false;
                alert('Thank you! Your order request for Joshua Premium Cookies has been received. We will contact you shortly.');
            }, 1000);
        });
    }

    // Hero Parallax Effect (Subtle)
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;
        hero.style.backgroundPositionY = offset * 0.7 + 'px';
    });
});
