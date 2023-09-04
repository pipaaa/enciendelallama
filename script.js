// script.js

// Función para ocultar el logo de carga cuando la página esté completamente cargada
window.addEventListener('load', () => {
    const loadingLogo = document.getElementById('loading-logo');
    if (loadingLogo) {
        loadingLogo.style.display = 'none';
    }
});
// script.js

// Función para ocultar el logo de carga después de 5 segundos
window.addEventListener('load', () => {
    const loadingLogo = document.getElementById('loading-logo');
    if (loadingLogo) {
        setTimeout(() => {
            loadingLogo.style.display = 'none';
        }, 5000); // 5000 milisegundos (5 segundos)
    }
});

