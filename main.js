// Controller navbar sandwich
document.addEventListener('DOMContentLoaded', function () {
    const navbarLinks = document.querySelector('.navbar-links');
    const navbarToggle = document.querySelector('.navbar-toggle');
    const overlay = document.getElementById('overlay');

    window.toggleMenu = function () {
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

    window.closeMenu = function () {
        navbarLinks.classList.remove('show');
        overlay.classList.remove('show');
        navbarToggle.innerHTML = '<i class="bi bi-list"></i>';
    }
});

// Emailjs config
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_wv4rgu3', 'template_cwi69ed', templateParams)
    .then(function(response) {
        console.log('Sucesso!', response.status, response.text);
        alert('E-mail enviado com sucesso!');
        document.getElementById('contactForm').reset();
    }, function(error) {
        console.error('Erro:', error);
        alert('Erro ao enviar o e-mail, tente novamente.');
    });
});
