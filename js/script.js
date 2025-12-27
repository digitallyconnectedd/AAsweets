/* ============================================
   A. A. SWEETS - MAIN JAVASCRIPT
   ============================================ */

// ============================================
// MOBILE MENU TOGGLE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Set active link based on current page
    setActiveNavLink();
});

// ============================================
// SET ACTIVE NAV LINK
// ============================================

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initial check for elements in viewport
    observeElements();

    // Observe for elements entering viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll(
        '.fade-in-up, .fade-in-left, .fade-in-right, .slide-up'
    );
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});

function observeElements() {
    const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .slide-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// BUTTON HOVER EFFECTS
// ============================================

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ============================================
// CARD HOVER EFFECTS
// ============================================

document.querySelectorAll('.featured-card, .benefit-card, .value-card, .menu-card, .info-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Simple validation
        if (!name || !phone || !subject || !message) {
            alert('Please fill in all required fields');
            return;
        }

        // Show success message (non-functional form for now)
        showSuccessMessage();

        // Reset form
        contactForm.reset();
    });
}

function showSuccessMessage() {
    const formWrapper = document.querySelector('.contact-form-wrapper');
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.style.cssText = `
        background-color: #4CAF50;
        color: white;
        padding: 15px;
        border-radius: 8px;
        margin-bottom: 20px;
        text-align: center;
        animation: fadeIn 0.3s ease;
    `;
    successMsg.textContent = '✓ Thank you for your message! We\'ll get back to you soon.';

    const form = formWrapper.querySelector('.contact-form');
    formWrapper.insertBefore(successMsg, form);

    // Remove message after 5 seconds
    setTimeout(() => {
        successMsg.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => successMsg.remove(), 300);
    }, 5000);
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add shadow on scroll
    if (scrollTop > 0) {
        navbar.style.boxShadow = '0 4px 15px rgba(44, 36, 22, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ============================================
// PHONE CALL CLICK TRACKING
// ============================================

document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Allow default tel: behavior
        // You can add analytics tracking here if needed
        console.log('Call initiated to: ' + this.getAttribute('href'));
    });
});

// ============================================
// PAGE SCROLL-TO-TOP ON LOAD
// ============================================

window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});

// ============================================
// LAZY LOAD IMAGES (if added)
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ============================================
// PARALLAX EFFECT (Optional Enhancement)
// ============================================

window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero::before');
    if (heroSection) {
        const scrollPosition = window.pageYOffset;
        const elements = document.querySelectorAll('.hero::before');
        elements.forEach(el => {
            // Subtle parallax effect
            el.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        });
    }
});

// ============================================
// KEYBOARD ACCESSIBILITY
// ============================================

document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        if (hamburger && navLinks) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    }
});

// ============================================
// RESPONSIVE BEHAVIOR
// ============================================

function handleResponsive() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (window.innerWidth > 768) {
        // Close mobile menu on larger screens
        if (hamburger) {
            hamburger.classList.remove('active');
        }
        if (navLinks) {
            navLinks.classList.remove('active');
        }
    }
}

window.addEventListener('resize', handleResponsive);

// ============================================
// ANALYTICS & LOGGING
// ============================================

console.log('A. A. Sweets website loaded successfully');
console.log('Phone: 0768689109');

// Track page views
window.addEventListener('load', function() {
    console.log('Page loaded: ' + window.location.pathname);
});
