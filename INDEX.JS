// Toggle menu visibility
function toggleMenu() {
    const menu = document.getElementById('menu');
    const sections = document.querySelectorAll('.page-section');
    
    menu.classList.toggle('hidden');
    
    // Toggle blur effect on page sections
    sections.forEach(section => {
        section.classList.toggle('blurred');
    });
}

// Close menu helper function
function closeMenu() {
    const menu = document.getElementById('menu');
    const sections = document.querySelectorAll('.page-section');
    
    if (menu && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        
        // Remove blur effect when closing menu
        sections.forEach(section => {
            section.classList.remove('blurred');
        });
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

// Enable smooth scrolling for all anchor links
document.addEventListener('DOMContentLoaded', function() {
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
