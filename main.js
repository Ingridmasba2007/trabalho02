const numeroSenha = document.querySelector('.parametro-senha__texto')
const botoes= document.querySelectorAll ('.parametro-senha__botao')
botoes[0].onclick = diminuirTamanho
botoes[1].onclick = aumentarTamanho
const campoSenha = document.querySelector("#campo-senha")
const checkbox = document.querySelectorAll('.checkbox')

const.log(checkbox)
let tamanhoSenha = 5


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
  let senha = " "
  for(let i =0;i < tamanhoSenha; i++) {
   let numeroAleatorio = Math.random()*maiuscula.length
   numeroAleatorio = Math.floor(numeroAleatorio)
   senha = senha + maiuscula[numeroAleatorio];
   console.log(senha) 
}
campoSenha.value = senha
}




