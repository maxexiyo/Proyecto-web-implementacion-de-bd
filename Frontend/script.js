const menu = document.getElementById("menu");
  const formulario = document.getElementById("formulario");
  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const producto = document.getElementById("producto");
  const cantidad = document.getElementById("cantidad");
  const mensaje = document.getElementById("mensaje");

  document.getElementById("mas").addEventListener("click", function () {
    if (cantidad.value < 20) 
    {
      cantidad.value = Number(cantidad.value) + 1;
    }
  });

  document.getElementById("menos").addEventListener("click", function () {
    if (cantidad.value > 1) {
      cantidad.value = Number(cantidad.value) - 1;
    }
  });

  formulario.addEventListener("submit", function (e) 
  {
    let valido = true;

    if (nombre.value.trim() === "") {
      document.getElementById("errorNombre").textContent = "El nombre es obligatorio";
      valido = false;
    } else {
      document.getElementById("errorNombre").textContent = "";
    }

    if (correo.value.trim() !== "" && !correo.value.includes("@")) {
      document.getElementById("errorCorreo").textContent = "Correo no válido";
      valido = false;
    } else {
      document.getElementById("errorCorreo").textContent = "";
    }

    if (producto.value === "") 
      {

      document.getElementById("errorProducto").textContent = "Selecciona un producto";
      valido = false;
    } else
       {
      document.getElementById("errorProducto").textContent = "";
    }

    if (valido)
       {
      mensaje.className = "";
      // Sin preventDefault: el formulario se envía al servidor de Node (action del form)
    } else {
      e.preventDefault(); // Solo se detiene el envío si hay errores
      mensaje.className = "error";
      alert ("Revisa los campos marcados");
    }
  });

  formulario.addEventListener("reset", function () {
    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorCorreo").textContent = "";
    document.getElementById("errorProducto").textContent = "";
    mensaje.textContent = "";
  
  });

  