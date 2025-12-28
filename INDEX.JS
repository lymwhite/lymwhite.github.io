// Cache DOM elements
let pageSections = null;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    pageSections = document.querySelectorAll('.page-section');
    
    // Enable smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                closeMenu();
            }
        });
    });
});

// Helper function to toggle blur effect
function toggleBlur() {
    if (pageSections) {
        pageSections.forEach(section => {
            section.classList.toggle('blurred');
        });
    }
}

// Helper function to remove blur effect
function removeBlur() {
    if (pageSections) {
        pageSections.forEach(section => {
            section.classList.remove('blurred');
        });
    }
}

// Toggle menu visibility
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
    toggleBlur();
}

// Close menu helper function
function closeMenu() {
    const menu = document.getElementById('menu');
    if (menu && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        removeBlur();
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
    }
}
