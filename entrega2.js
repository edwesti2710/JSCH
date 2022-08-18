let contador = 0;
let resultado = [];
const fecha = new Date();

setTimeout(function () {
    let tipoRespuesta = parseInt(prompt('1 o 2'));
    if (tipoRespuesta == 1 || tipoRespuesta == 2){
        let anoNacimiento = parseInt(prompt('Ingresa tu año de nacimiento:'));

        if (anoNacimiento < (fecha.getFullYear()-100)) {
            mostrarRespuesta(tipoRespuesta, 'Tienes más de 100 años, yo que tu estaría aprovechando el tiempo en vez de hacer esto :v')
        } else {
            let edadActual = parseInt(fecha.getFullYear()) - anoNacimiento;
            let mesNacimiento = parseInt(prompt('Ingresa tu mes de nacimiento (Número):'));
            let diaNacimiento = parseInt(prompt('Ingresa tu día de nacimiento (Número):'));
        
            findPares(edadActual, mesNacimiento, diaNacimiento)

        }
    } else {
        alert('¿Sabes leer?')
    }

    function findPares(edadActual, mesNacimiento, diaNacimiento){
        while (edadActual > 0){
            if (edadActual % 2 === 0){
                resultado.push(edadActual);
                contador++;
            }
            edadActual--
        }
    
        if (mesNacimiento > fecha.getMonth()+1){
            resultado.shift();
            contador--;
        } else if (mesNacimiento == fecha.getMonth()+1){
            if (diaNacimiento > fecha.getDate()){
                resultado.shift();
                contador--;
            }
        }
        mostrarRespuesta(tipoRespuesta, 'Tuviste '+contador+' años pares:\n'+resultado);
    }
    
    function mostrarRespuesta(tipo, mensaje){
        if (tipo === 2){
            console.log(mensaje);
        } else if (tipo === 1){
            alert(mensaje);
        }
    }
}, 3000);

