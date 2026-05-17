// Capturamos el elemento de la pantalla de la calculadora
const pantalla = document.getElementById("pantalla");

// Función para agregar números u operadores a la pantalla
function agregarValor(valor) {
  // Evita escribir dos puntos decimales seguidos
  if (valor === "." && pantalla.value.endsWith(".")) {
    return;
  }

  // Agrega el valor seleccionado al contenido actual
  pantalla.value += valor;
}

// Función para limpiar toda la pantalla
function limpiarPantalla() {
  pantalla.value = "";
}

// Función para borrar el último carácter escrito
function borrarUltimo() {
  pantalla.value = pantalla.value.slice(0, -1);
}

// Función para calcular el resultado de la operación
function calcularResultado() {
  try {
    // Si la pantalla está vacía, no hace nada
    if (pantalla.value.trim() === "") {
      return;
    }

    // Evalúa la operación matemática escrita
    let resultado = eval(pantalla.value);

    // Valida que el resultado sea un número correcto
    if (Number.isFinite(resultado)) {
      pantalla.value = parseFloat(resultado.toFixed(8));
    } else {
      pantalla.value = "Error";
    }

  } catch (error) {
    // Si la operación está mal escrita, muestra Error
    pantalla.value = "Error";
  }
}

// Permite controlar la calculadora con el teclado físico
document.addEventListener("keydown", function(evento) {
  const tecla = evento.key;

  // Teclas permitidas para escribir operaciones
  const teclasPermitidas = "0123456789+-*/.%";

  // Si la tecla es válida, se agrega a la pantalla
  if (teclasPermitidas.includes(tecla)) {
    agregarValor(tecla);
  }

  // Enter calcula el resultado
  if (tecla === "Enter") {
    calcularResultado();
  }

  // Backspace borra el último carácter
  if (tecla === "Backspace") {
    borrarUltimo();
  }

  // Escape limpia toda la pantalla
  if (tecla === "Escape") {
    limpiarPantalla();
  }
});