function guardarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let comentarios = document.getElementById("comentarios").value;

    alert("Formulario guardado");

    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Comentarios:", comentarios);
}

function borrarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comentarios").value = "";
    document.getElementById("tipo").checked = false;
    document.getElementById("tipo1").checked = false;
    document.getElementById("tipo2").checked = false;
    document.getElementById("cantidad").value = "";
    document.getElementById("informacion").checked = false;
    
}