// Leemos los datos que vienen en la URL (resumen.html?nombre=...&correo=...)
const parametros = new URLSearchParams(window.location.search);

// Cada nombre es el id de un <p> en resumen.html
const campos = ['nombre', 'correo', 'producto', 'cantidad', 'tamano', 'llevar', 'observaciones'];

campos.forEach(function (campo) {
  const valor = parametros.get(campo);

  // Si el dato viene vacío (por ejemplo, el correo es opcional) mostramos un guion
  document.getElementById(campo).textContent = valor ? valor : '-';
});