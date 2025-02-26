// Declaramos la lista de amigos con let
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let nombre = prompt("Ingresa el nombre del amigo:");
    if (nombre) {
        amigos.push(nombre);
        alert(nombre + " ha sido agregado a la lista de amigos.");
    } else {
        alert("No se ingresó ningún nombre.");
    }
}

// Función para actualizar un amigo
function actualizarAmigo() {
    let indice = prompt("Ingresa el índice del amigo a actualizar:");
    indice = parseInt(indice);
    if (!isNaN(indice) && indice >= 0 && indice < amigos.length) {
        let nuevoNombre = prompt("Ingresa el nuevo nombre:");
        if (nuevoNombre) {
            let viejoNombre = amigos[indice];
            amigos[indice] = nuevoNombre;
            alert(viejoNombre + " ha sido actualizado a " + nuevoNombre + ".");
        } else {
            alert("No se ingresó un nuevo nombre.");
        }
    } else {
        alert("Índice inválido o fuera de rango.");
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length > 0) {
        let indice = Math.floor(Math.random() * amigos.length);
        let seleccionado = amigos[indice];
        alert("El amigo sorteado es: " + seleccionado);
    } else {
        alert("No hay amigos en la lista para sortear.");
    }
}

// Función para mostrar la lista de amigos
function mostrarAmigos() {
    if (amigos.length > 0) {
        let lista = "Lista de amigos:\n";
        amigos.forEach(function(amigo, index) {
            lista += index + ": " + amigo + "\n";
        });
        alert(lista);
    } else {
        alert("La lista de amigos está vacía.");
    }
}

// Función del menú principal
function menu() {
    let opcion = prompt("--- Menú de Gestión de Amigos ---\n1. Agregar amigo\n2. Actualizar amigo\n3. Sortear amigo\n4. Mostrar amigos\n5. Salir\nElige una opción (1-5):");
    if (opcion === "1") {
        agregarAmigo();
    } else if (opcion === "2") {
        actualizarAmigo();
    } else if (opcion === "3") {
        sortearAmigo();
    } else if (opcion === "4") {
        mostrarAmigos();
    } else if (opcion === "5") {
        alert("Saliendo del programa. ¡Hasta luego!");
    } else {
        alert("Opción no válida. Por favor, elige una opción entre 1 y 5.");
    }
}

