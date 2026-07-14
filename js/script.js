//====================
// PESQUISA
//====================

const pesquisa = document.getElementById("campoPesquisa");

pesquisa.addEventListener("keyup", function () {

    let texto = pesquisa.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        let nome = card.querySelector("p").textContent.toLowerCase();

        if(nome.includes(texto)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});


//====================
// CARRINHO
//====================

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const botoes = document.querySelectorAll(".btnAdicionar");

botoes.forEach(function(botao){

    botao.addEventListener("click", function(){

        let card = botao.parentElement;

        let produto = {

            nome: card.querySelector("p").textContent,
            preco: card.querySelector("h2").textContent,
            imagem: card.querySelector("img").src

        };

        carrinho.push(produto);

        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        alert(produto.nome + " adicionado ao carrinho!");

    });

});