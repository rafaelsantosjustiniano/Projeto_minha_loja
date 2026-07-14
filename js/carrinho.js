let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

let lista = document.getElementById("listaCarrinho");
let total = 0;

if(carrinho.length === 0){

    lista.innerHTML = "<h2>Seu carrinho está vazio.</h2>";

}else{

    carrinho.forEach(function(produto, indice){

        let preco = parseFloat(
            produto.preco
                .replace("R$", "")
                .replace(".", "")
                .replace(",", ".")
        );

        total += preco * produto.quantidade;

        lista.innerHTML += `
            <div class="produtoCarrinho">

                <img src="${produto.imagem}" width="150">

                <h3>${produto.nome}</h3>

                <p>${produto.preco}</p>

                <p>Quantidade: ${produto.quantidade}</p>

                <button onclick="remover(${indice})">
                    Remover
                </button>

            </div>
        `;
    });

    lista.innerHTML += `
        <h2>Total: R$ ${total.toFixed(2).replace(".", ",")}</h2>
    `;
}

function remover(indice){

    carrinho.splice(indice,1);

    localStorage.setItem("carrinho",JSON.stringify(carrinho));

    location.reload();

}