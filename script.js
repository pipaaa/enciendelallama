// script.js

// Función para ocultar el logo de carga cuando la página esté completamente cargada
window.addEventListener('load', () => {
    const loadingLogo = document.getElementById('loading-logo');
    if (loadingLogo) {
        loadingLogo.style.display = 'none';
    }
});
// script.js

// Función para mostrar el logo de carga y luego ocultarlo después de 5 segundos
document.addEventListener('DOMContentLoaded', () => {
    const loadingLogo = document.getElementById('loading-logo');

    // Muestra el logo de carga al principio
    loadingLogo.style.display = 'block';

    // Después de 5 segundos, oculta el logo
    setTimeout(() => {
        loadingLogo.style.display = 'none';
        
        // Agrega aquí cualquier otra lógica que desees ejecutar después de que el logo se haya ocultado
    }, 5000); // 5000 milisegundos (5 segundos)
});
