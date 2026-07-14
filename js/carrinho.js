let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

let lista = document.getElementById("listaCarrinho");

if(carrinho.length == 0){

    lista.innerHTML = "<h2>Seu carrinho está vazio.</h2>";

}else{

    carrinho.forEach(function(produto){

        lista.innerHTML += `
            <div class="produtoCarrinho">

                <img src="${produto.imagem}" width="150">

                <h3>${produto.nome}</h3>

                <p>${produto.preco}</p>

            </div>
        `;

    });

}