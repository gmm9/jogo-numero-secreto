const facil = document.querySelector('#btn-iniciante');
const medio = document.querySelector('#btn-medio');
const dificil = document.querySelector('#btn-dificil');
const corpo = document.querySelector('.container');
const botoes = document.querySelector('.div-botoes')
let liberarGame = false;
let rounds = 0;

facil.addEventListener('click',dificuldade);
medio.addEventListener('click',dificuldade);
dificil.addEventListener('click',dificuldade);



function dificuldade(e) {
    corpo.innerHTML = `<h1>Acerte o número secreto</h1> 
    <h3>O número secreto está entre <span id="menor-valor">1</span> e <span id="maior-valor">1000</span></h3>
    <div id="chute" class="mensagem"> </div>`
    botoes.classList.add('btn-none');
    liberarGame = true;
    tentativas(e.target.value)
}

function tentativas(dificuldade) {
 if(dificuldade === 'b-facil') {
    console.log('FACIL FACIL')
    rounds = 10;
    return rounds;
 }
 if(dificuldade === 'b-medio') {
    console.log('MEDIO MEDIO')
     rounds = 5;
     return rounds;

}
 if(dificuldade === 'b-dificil') {
    console.log('DIFICIL DIFICIL')
    rounds = 3;
    return rounds;

}

}
