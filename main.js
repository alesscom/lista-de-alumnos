nombrealumno_array=[];
function submit(){
    var nombre1 = document.getElementById("nombre_alumno_1").value;
    var nombre2 = document.getElementById("nombre_alumno_2").value;
    var nombre3 = document.getElementById("nombre_alumno_3").value;
    var nombre4 = document.getElementById("nombre_alumno_4").value;
    nombrealumno_array.push(nombre1);
    nombrealumno_array.push(nombre2);
    nombrealumno_array.push(nombre3);
    nombrealumno_array.push(nombre4);
    console.log(nombrealumno_array);
    document.getElementById("ver_nombre").innerHTML=nombrealumno_array;
    document.getElementById("botonenviar").style.display="none";
    document.getElementById("boton_ordenar").style.display="inline-block";
}
function sorting(){
    nombrealumno_array.sort();
    console.log(nombrealumno_array);
    document.getElementById("ver_nombre").innerHTML=nombrealumno_array;
}