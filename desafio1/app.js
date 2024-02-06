const titulo = document.querySelector('.titulo');
const btnCnsole = document.getElementById('btnConsole');
const bntPrompt = document.getElementById('btnPrompt');

titulo.textContent = 'Hora do desafio'

//Botão Console
function printConsole(){
    console.log('Console');
}
btnCnsole.addEventListener('click', printConsole);
// btnCnsole.addEventListener('click', () =>{
//     console.log('Console');
// })


//Botão alert
function printEuAmoJs(){
    alert("Eu amo JS");
}

//Botão Prompt
bntPrompt.addEventListener('click', () => {
    let cidade = prompt("Qual o nome da cidade em que você nasceu ?");
    alert(`etive em ${cidade} e lembrei de você.`);
})

//Botão soma
function soma(){
     num1 = parseInt(prompt("Escolha o primeiro nuemro:"));
    let num2 = parseInt(prompt("Escolha o segundo nuemro:"));
    let soma = num1 + num2;
    alert(`A soma dos numero é: ${soma}`);
}


