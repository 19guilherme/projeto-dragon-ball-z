// Uma linha de comentario
/*
    Várias linhas de comentarios
*/

// SEMPRE SE PLANEJAR, ANTES DE CODAR JS
//------------------------------------------
/* 
    OBJETIVO 1 - Quando passar o moude em cima do personagem temos que:
    
        - colocar a classe selecionado no personagem que passarmos o mouse em cima para adicionar a animação nele

        - retirar a classe selecionado do personagem que não estiver selecionado

    OBJETIVO 2 - quando passar o mouse em cima do personagem, trocar imagem e nome do personagem grande

        - alterar a imagem do jogador 1
        - alterar o nome do jogador 1
*/
//-------------------------------------------------------------



//  Estiliza cada personagem um por um, mas não remove o "selecionado nos personagem"
/*const homemDeFerro = document.getElementById('homem-de-ferro') //localizando o documento do homem de ferro(HTML)

homemDeFerro.addEventListener('mouseenter', () => {
    homemDeFerro.classList.add('selecionado')
})
*/

// console.log - Aparece no navegador


const personagens = document.querySelectorAll('.personagem') // engloba todos os personagem na função

personagens.forEach((personagem) => {
        personagem.addEventListener('mouseenter', () => {

            const idSelecionado = personagem.attributes.id.value;

            if(idSelecionado === 'freeza') return; // === COMPARAÇÃO
                /* NESSA LINHA, colocamos um "if"(se), quando passar o mouse em cima do ultron, não realizar nenhuma função. */

        /*
            OBJETIVO 1 - Quando passar o moude em cima do personagem temos que:
            - colocar a classe selecionado no personagem que passarmos o mouse em cima para adicionar a animação nele

            - retirar a classe selecionado do personagem que não estiver selecionado
        */
        const personagemSelecionado = document.querySelector('.selecionado'); // pegar a classe "selecionado"
        personagemSelecionado.classList.remove('selecionado'); // remove a classe selecionado do personação, ao tirar o mouse

        personagem.classList.add('selecionado'); // ao passar o mouse em cima, selecionará o personagem
    
        /*
            OBJETIVO 2 - quando passar o mouse em cima do personagem, trocar imagem e nome do personagem grande
            - alterar a imagem do jogador 1
            - alterar o nome do jogador 1
        */
        
        
        
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`; // utilizar o simbolo `crasse`e não a 'aspas-simples', concatenar id para imagem.

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');

        nomeJogador1.innerHTML = nomeSelecionado;
    });
});


