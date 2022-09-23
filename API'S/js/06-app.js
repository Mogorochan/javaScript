//Controlador de voz
//*conexion con los elementos de HTML
const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

//*eventos
microfono.addEventListener('click', ejecutarSpeechAPI);

//*function
function ejecutarSpeechAPI(){
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition;

    // start recognition
    recognition.start();


    // This runs when the speech recognition service starts
    recognition.onstart = function() {//inicio la grabación y hablo
        salida.classList.add('mostrar');//clase css
        salida.innerHTML = "Escuchando...";
    };
    
    recognition.onspeechend = function() {//cuando se haya terminado de hablar
        salida.innerHTML = "Se detuvo de ejecutar";
        recognition.stop();
    };
  
    // This runs when the speech recognition service returns result
    recognition.onresult = function(e) {//guarda la grabacion

        console.log(e.results);

        var transcript = e.results[0][0].transcript;//lo que en realidad estoy hablando(esto se imprime en una array, entonces se accede por medio de indice)
        var confidence = e.results[0][0].confidence;//trata de validar que lo que hablas tenga sentido

        //imprime los resultados en pantalla con innerHtml
        const speech = document.createElement('p');
        speech.innerHTML = `Grabado: ${transcript}`;

        const seguridad = document.createElement('p');
        seguridad.innerHTML =  `Seguridad:  ${ parseInt( confidence*100) } %`;

        salida.appendChild(speech);
        salida.appendChild(seguridad);
    };
}