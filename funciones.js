/* Funciones que muestran u ocultan el contenido de la información complementaria */

/* Inicialmente no se muestra el contenido de Formación y Cursos */
document.getElementById('formacion').style.display = 'none';
document.getElementById('cursos').style.display = 'none';

/* Respuesta a los eventos click de los botones mostrar formación o curso */
document.getElementById('mostrarFormacion').addEventListener('click', function(){
    mostrar(document.getElementById('formacion'), document.getElementById('mostrarFormacion'), "Formación Académica");
});
document.getElementById('mostrarCursos').addEventListener('click', function(){
    mostrar(document.getElementById('cursos'), document.getElementById('mostrarCursos'), "Cursos realizados");
});

/* Función que según el botón presionado recibe formacion o curso y muestra u oculta la información */
function mostrar(contenido, boton, titulo) {
    if (contenido.style.display === 'none') {
        contenido.style.display = 'block';
        boton.innerHTML = "Ocultar " + titulo;
    } else {
        contenido.style.display = 'none';
        boton.innerHTML = "Mostrar " + titulo;
    }
  }