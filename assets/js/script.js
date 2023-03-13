let botoesCarrossel = document.querySelectorAll('.botao')
let imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', function(){

        desativarBotaoSelecionado()

        botao.classList.toggle('selecionado')

        escondeImagemAtiva()

        imagens[indice].classList.add('ativo')
    })
})

function desativarBotaoSelecionado() {
    let botaoSelecionado = document.querySelector('.selecionado')
    botaoSelecionado.classList.remove('selecionado')
}

function escondeImagemAtiva() {
    let imagemAtivo = document.querySelector('.ativo')
    imagemAtivo.classList.remove('ativo')
}




