//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10'
let listadeNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextonaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirTextoinicial(){
    exibirTextonaTela('h1', 'Jogo do número secreto');
    exibirTextonaTela('p', 'Escolha um número entre 1 e 50'); 
}

exibirTextoinicial();


function verificarChute(){
    let chute = document.querySelector('.container__input').value;
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextonaTela('h1', 'Acertou!');
        let mensagemTentativas =  `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`
        exibirTextonaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if(chute < numeroSecreto){
            exibirTextonaTela('p', 'Numero secreto é maior que o chute');
        }else{
            exibirTextonaTela('p', 'Numero secreto é menor que o chute');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let nuemroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementos = listadeNumerosSorteados.length;

    if(quantidadeElementos == numeroLimite){
        listadeNumerosSorteados = [];
    }

    if(listadeNumerosSorteados.includes(nuemroEscolhido)){
        return gerarNumeroAleatorio(); //recursão
    }else{
        console.log(listadeNumerosSorteados);
        listadeNumerosSorteados.push(nuemroEscolhido);
        return nuemroEscolhido
    }
}

function limparCampo(){
    chute = document.querySelector('.container__input');
    chute.value ='';
}

function reinicairJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoinicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}