//====================
// PESQUISA
//====================

const pesquisa = document.getElementById("campoPesquisa");

if (pesquisa) {

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

}


//====================
// CARRINHO
//====================

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const botoes = document.querySelectorAll(".btnAdicionar");

botoes.forEach(function(botao){

    botao.addEventListener("click", function(){

        let card = botao.closest(".card");

        let produto = {

            nome: card.querySelector("p").textContent,
            preco: card.querySelector("h2").textContent,
            imagem: card.querySelector("img").src,
            quantidade: 1

        };

        // Verifica se o produto já está no carrinho
        let existente = carrinho.find(item => item.nome === produto.nome);

        if(existente){
            existente.quantidade++;
        }else{
            carrinho.push(produto);
        }

        // Salva no LocalStorage
        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        // Redireciona para a página do carrinho
        window.location.href = "paginas/carrinho.html";

    });

});

//====================
// FILTRO DE CATEGORIAS
//====================

const categorias = document.querySelectorAll(".categoria");

categorias.forEach(function(botao){

    botao.addEventListener("click", function(e){

        e.preventDefault();

        const categoria = this.dataset.categoria;

        const cards = document.querySelectorAll(".card");

        cards.forEach(function(card){

            if(categoria === "todos"){

                card.style.display = "flex";

            }else if(card.dataset.categoria === categoria){

                card.style.display = "flex";

            }else{

                card.style.display = "none";

            }

        });

    });

});