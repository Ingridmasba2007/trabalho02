const numeroSenha = document.querySelector('.parametro-senha__texto')
const botoes= document.querySelectorAll ('.parametro-senha__botao')
botoes[0].onclick = diminuirTamanho
function  diminuirTamanho () {
    console.log('teste')
}



numeroSenha.textContent = 6
