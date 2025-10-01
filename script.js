// Script para menú responsivo
const navToggle = document.getElementById('nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Opcional: cerrar menú al hacer clic en un enlace (en móvil)
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

// Opcional: validación simple del formulario (puedes ampliar)
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Gracias por contactarnos, ' + form.nombre.value + '!');
    form.reset();
});