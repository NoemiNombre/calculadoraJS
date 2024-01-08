let nombreAlumno;
let materia;
let nota1;
let nota2;
let nota3;
let otroCalculo;

let promedio;
var repetir = true
debugger
while (repetir) {
    nombreAlumno = prompt("Ingrese el nombre del Alumno:");
    materia = prompt("Ingrese nombre de la Materia:");
    

    nota1 = parseInt(prompt("Ingrese la nota 1:"));
    

    if (nota1 <= 10 && nota1 >= 0) {
        nota2 = parseInt(prompt("Ingrese la nota 2:"));
    }else {
        while (nota1 > 10 || nota1 < 0) {
            alert("Por favor vuelve a ingresar valor valido de nota 1");
            nota1 = parseInt(prompt("Ingrese la nota 1:"));
        }
        nota2 = parseInt(prompt("Ingrese la nota 2:"));
    };

    if (nota2 <= 10 && nota2 >= 0) {
        nota3 = parseInt(prompt("Ingrese la nota 3:"));
    } else {
        while (nota2 > 10 || nota2 < 0) {
            alert("Por favor vuelve a ingresar valor valido de nota 2");
            nota2 = parseInt(prompt("Ingrese la nota 2:"));
        }
        nota3 = parseInt(prompt("Ingrese la nota 3:"));
    };

    if (nota3 <= 10 && nota3 >= 0) {
        promedio = (nota1 + nota2 + nota3) / 3;
    } else {
        while (nota3 > 10 || nota3 < 0) {
            alert("Por favor vuelve a ingresar valor valido de nota 3");
            nota3 = parseInt(prompt("Ingrese la nota 3:"));
        }
        promedio = (nota1 + nota2 + nota3) / 3;
    };

    if (promedio >= 7) {
        alert(nombreAlumno + " Felicidades!, Haz aprobado con un promedio de " + promedio);
    } else {
        alert(nombreAlumno + " Gracias por tu esfuerzo, nos vemos pronto en clase. El promedio obtenido es " + promedio);
    };

    
    otroCalculo = (prompt("Desea sacar otro promedio?"));
    
    if (otroCalculo === "si") {
        repetir
    } else if (otroCalculo === "no") {
        alert("Adios :)");
        repetir=false
    };  
}



//const nombreAlumno = prompt("Ingrese el nombre del Alumno:");
// const materia = prompt("Ingrese nombre de la Materia:");

// var nota1 = parseInt(prompt("Ingrese la nota 1:"));
// var promedio;

// if (nota1 <= 10 && nota1 >= 0) {
//     var nota2 = parseInt(prompt("Ingrese la nota 2:"));
// } else {
//     alert("Por favor vuelve a ingresar valor valido de nota 1");
//     var nota1 = parseInt(prompt("Ingrese la nota 1:"));
//     var nota2 = parseInt(prompt("Ingrese la nota 2:"));
// };

// if (nota2 <= 10 && nota2 >= 0) {
//     var nota3 = parseInt(prompt("Ingrese la nota 3:"));
// } else {
//     alert("Por favor vuelve a ingresar valor valido de nota 2");
//     var nota2 = parseInt(prompt("Ingrese la nota 2:"));
//     var nota3 = parseInt(prompt("Ingrese la nota 3:"));
// };

// if (nota3 <= 10 && nota3 >= 0) {
//     promedio = (nota1 + nota2 + nota3) / 3;
// } else {
//     alert("Por favor vuelve a ingresar valor valido de nota 3");
//     var nota3 = parseInt(prompt("Ingrese la nota 3:"));
//     promedio = (nota1 + nota2 + nota3) / 3;
// }

// if (promedio >= 7) {
//     alert(nombreAlumno + " Felicidades!, Haz aprobado con un promedio de " + promedio);
// } else {
//     alert(nombreAlumno + " gracias por tu esfuerzo, nos vemos pronto en clase. El promedio obtenido es " + promedio);
// }

// const nombreAlumno = prompt("Ingrese el nombre del Alumno:");
// const materia = prompt("Ingrese nombre de la Materia:");
// 



















