function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}

function showPortfolio(portfolioNumber) {
    // Remove active class from all circles
    const circles = document.querySelectorAll('.nav-circle');
    circles.forEach(circle => {
        circle.classList.remove('active');
    });
    
    // Add active class to clicked circle
    const activeCircle = document.querySelector(`.nav-circle[data-portfolio="${portfolioNumber}"]`);
    if (activeCircle) {
        activeCircle.classList.add('active');
    }
    
    // Hide all portfolio sets
    const portfolioSets = document.querySelectorAll('.portfolio-set');
    portfolioSets.forEach(set => {
        set.classList.remove('active');
    });
    
    // Show selected portfolio set
    const activeSet = document.querySelector(`.portfolio-set[data-set="${portfolioNumber}"]`);
    if (activeSet) {
        activeSet.classList.add('active');
    }
}
