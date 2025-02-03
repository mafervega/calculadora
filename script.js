let pantalla = document.getElementById("pantalla");

function agregarValor(valor) {
    pantalla.value += valor;
}

function borrarTodo() {
    pantalla.value = "";
}

function borrarUno() {
    pantalla.value = pantalla.value.slice(0, -1);
}

function calcularResultado() {
    try {
        pantalla.value = eval(pantalla.value); // Evalúa la operación
    } catch (error) {
        pantalla.value = "Error"; // Si hay un error en la expresión
    }
}
