// script.js

// Función para mostrar la advertencia y permitir al usuario escribir "Entendido" para continuar
function mostrarAdvertencia() {
    const mensaje = "Bienvenidos a Verdad o Reto. Recordad antes de jugar que es muy importante tener un nivel de confianza medio-avanzado para jugar a este juego. Y tambien recordad que no tiene que daros nunca verguenza y que para las relaciones lo mejor para dar el paso son juegos asi.";
    alert(mensaje);
    
    let respuesta = prompt("Escribe 'Entendido' para continuar");
    
    // Espera hasta que el usuario escriba "Entendido"
    while (respuesta.toLowerCase() !== "entendido") {
        respuesta = prompt("Por favor, escribe 'Entendido' para continuar");
    }
}

// Asocia la función de advertencia a un evento click en los botones
document.getElementById('verdadButton').addEventListener('click', () => {
    mostrarAdvertencia();
    
    // Aquí puedes agregar tu lógica para una "verdad" específica para parejas a distancia
    // Puedes utilizar prompt o una ventana modal para mostrar la verdad
});

document.getElementById('retoButton').addEventListener('click', () => {
    mostrarAdvertencia();
    
    // Aquí puedes agregar tu lógica para un "reto" específico para parejas a distancia
    // Puedes utilizar prompt o una ventana modal para mostrar el reto
});
