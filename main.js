const numeroSenha = document.querySelector('.parametro-senha__texto')
const botoes= document.querySelectorAll ('.parametro-senha__botao')
const campoSenha = document.querySelector("#campo-senha")
const checkbox = document.querySelectorAll('.checkbox')
let tamanhoSenha = 5

botoes[0].onclick = diminuirTamanho
botoes[1].onclick = aumentarTamanho

console.log(checkbox)



numeroSenha.textContent = tamanhoSenha
let maiuscula ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let minuscula ="abcdefghijklmnopqrstuvwxyz"
let numero = "0123456789"
let simbolos ="!?@%&*"



geraSenha()

function diminuirTamanho(){
   if (tamanhoSenha > 1) {
   tamanhoSenha = tamanhoSenha - 1
   numeroSenha.textContent = tamanhoSenha }
   geraSenha()
}


function aumentarTamanho(){
if (tamanhoSenha < 20) {
    tamanhoSenha = tamanhoSenha + 1
    numeroSenha.textContent = tamanhoSenha
    }
    geraSenha()

}
function geraSenha(){

 let senha = ""
  let alfabeto = "";
  if (checkbox[0].checket){
    alfabeto = alfabeto+numero 
}

if (checkbox[1].checket){
  alfabeto = alfabeto+minuscula 
}

if (checkbox[2].checket){
  alfabeto = alfabeto+maiuscula 
}

if (checkbox[3].checket){
  alfabeto = alfabeto+simbolos 
}

  for(let i =0;i < tamanhoSenha; i++) {
   let numeroAleatorio = Math.random()*alfabeto.length
   numeroAleatorio = Math.floor(numeroAleatorio)
   senha = senha + alfabeto[numeroAleatorio];
   console.log(senha) 
}
campoSenha.value = senha
}




