document.addEventListener("DOMContentLoaded", function() {
  // Obtener elementos del DOM
const selectCorreo = document.getElementById('select-correo');
const baseCorreo = document.getElementById('base-correo');
const resultCorreo = document.getElementById('result-correo');

// Definir función para actualizar vista con el correo base y resultante
function actualizarVista(correoSeleccionado) {
  // Obtener correo base y campos correspondientes
  const correoBase = correos[correoSeleccionado].cuerpo;
  const campos = correos[correoSeleccionado].campos;

  // Actualizar vista con correo base
  baseCorreo.textContent = correoBase;

  // Actualizar vista con correo resultante
  let correoResultante = correoBase;
  Object.keys(campos).forEach((campo) => {
    const valorCampo = document.getElementById(campo).value;
    correoResultante = correoResultante.replaceAll(`{{${campos[campo]}}}`, valorCampo);
  });
  resultCorreo.textContent = correoResultante;
}

// Manejar evento de selección de correo
selectCorreo.addEventListener('change', (event) => {
  const correoSeleccionado = event.target.value;
  actualizarVista(correoSeleccionado);
});

// Inicializar vista con primer correo
actualizarVista(Object.keys(correos)[0]);

});