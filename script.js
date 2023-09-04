// script.js

// Función para ocultar el logo de carga cuando la página esté completamente cargada
window.addEventListener('load', () => {
    const loadingLogo = document.getElementById('loading-logo');
    if (loadingLogo) {
        loadingLogo.style.display = 'none';
    }
});
