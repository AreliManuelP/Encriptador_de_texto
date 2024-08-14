function encriptar() {
    let textoOriginal = document.getElementById("ingresoTexto").value.toLowerCase();
    
    // Verificar si el área de texto está vacía
    if (textoOriginal.trim() === "") {
        let titulo = document.getElementById("mensajeAdv");
        titulo.style.display = "block";
        titulo.textContent = "Por favor, ingrese algún texto para encriptar.";
        return; // Salir de la función si no hay texto
    }

    let textoEncriptado = textoOriginal
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("imgDer").style.display = "none";
    let titulo = document.getElementById("mensajeAdv");
    titulo.style.display = "none";
    actualizarTexto(textoEncriptado);
    document.getElementById("txtInfo").classList.add("ajustar");
}

function desencriptar() {
    let texto = document.getElementById("ingresoTexto").value.toLowerCase();
    
    // Verificar si el área de texto está vacía
    if (texto.trim() === "") {
        let titulo = document.getElementById("mensajeAdv");
        titulo.style.display = "block";
        titulo.textContent = "Por favor, ingrese algún texto para desencriptar.";
        return; // Salir de la función si no hay texto
    }

    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
        
    document.getElementById("imgDer").style.display = "none";
    let titulo = document.getElementById("mensajeAdv");
    titulo.style.display = "none";
    actualizarTexto(textoDesencriptado);
    document.getElementById("txtInfo").classList.add("ajustar");
}

function actualizarTexto(texto) {
    let mensajeElement = document.getElementById("txtInfo");
    mensajeElement.innerHTML = texto;

    // Mostrar el botón de copiar
    let botonCopiar = document.getElementById("botonCopiar");
    botonCopiar.style.display = "inline-block";
}

function copiar() {
    // Selecciona el elemento textarea de solo lectura
    let textarea = document.getElementById("txtInfo");
    
    // Selecciona el contenido del textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móviles
    
    // Copia el texto al portapapeles
    navigator.clipboard.writeText(textarea.value)
        .then(() => {
            // Selecciona el elemento de mensaje copiado
            let mensajeCopiado = document.getElementById("mensajeCopiado");

            // Muestra el mensaje
            mensajeCopiado.style.display = "block";

            // Oculta el mensaje después de 2 segundos
            setTimeout(() => {
                mensajeCopiado.style.display = "none";
            }, 2000); // 2000 milisegundos = 2 segundos
        })
        .catch(err => {
            // Maneja cualquier error que pueda ocurrir durante la copia
            console.error("Error al copiar texto: ", err);
        });
}