// Controller navbar sandwich
document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelector('.navbar-links'); 
    const navbarToggle = document.querySelector('.navbar-toggle'); 
    const overlay = document.getElementById('overlay'); 

    window.toggleMenu = function() {
        if (navbarLinks.classList.contains('show')) {
            navbarLinks.classList.remove('show');
            overlay.classList.remove('show');
            navbarToggle.innerHTML = '<i class="bi bi-list"></i>';
        } else {
            navbarLinks.classList.add('show');
            overlay.classList.add('show');
            navbarToggle.innerHTML = '<i class="bi bi-x"></i>';
        }
    }

    window.closeMenu = function() {
        navbarLinks.classList.remove('show');
        overlay.classList.remove('show');
        navbarToggle.innerHTML = '<i class="bi bi-list"></i>';
    }
});
