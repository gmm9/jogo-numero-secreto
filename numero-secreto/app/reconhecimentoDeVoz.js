const elementoChute = document.querySelector(".container");
let i = 1;
window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
  chute = e.results[0][0].transcript;
  if (liberarGame) {
    console.log("Voice liberada");
    exibeChuteNaTela(chute);
    if(i < rounds) {
        verificaSeOChutePossuiUmValorValido(chute);
        // i++;
    }
    else {
        document.body.innerHTML = `
        <h2>Você Errou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }
  } else {
    console.log("Voz não liberada");
  }
}
function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `;
}
recognition.addEventListener("end", () => recognition.start());
