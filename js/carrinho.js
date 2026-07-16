let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const lista = document.getElementById("listaCarrinho");

function carregarCarrinho() {

    lista.innerHTML = "";

    if (carrinho.length === 0) {
        lista.innerHTML = "<h2>Seu carrinho está vazio.</h2>";
        return;
    }

    let totalGeral = 0;

    carrinho.forEach(function(produto, indice){

        let preco = parseFloat(
            produto.preco
                .replace("R$", "")
                .replace(".", "")
                .replace(",", ".")
        );

        let totalItem = preco * produto.quantidade;

        totalGeral += totalItem;

        lista.innerHTML += `

        <div class="produtoCarrinho">

            <div class="fotoProduto">
                <img src="${produto.imagem}">
            </div>

            <div class="dadosProduto">

                <h2>${produto.nome}</h2>

                <p>Preço: <strong>${produto.preco}</strong></p>

            </div>

            <div class="quantidadeProduto">

                <label>Quantidade</label>

                <input
                    type="number"
                    min="1"
                    value="${produto.quantidade}"
                    onchange="alterarQuantidade(${indice}, this.value)"
                >

            </div>

            <div class="totalProduto">

                <p>Total do Item</p>

                <h3>R$ ${totalItem.toFixed(2).replace(".", ",")}</h3>

            </div>

            <div class="botaoProduto">

                <button onclick="remover(${indice})">
                    Remover
                </button>

            </div>

        </div>

        <hr>

        `;

    });

    lista.innerHTML += `

    <div class="resumoCompra">

        <h2>Total Geral: R$ ${totalGeral.toFixed(2).replace(".", ",")}</h2>

        <div class="frete">

            <input
                type="text"
                id="cep"
                placeholder="Digite seu CEP"
            >

            <button onclick="calcularFrete(${totalGeral})">
                Calcular Frete
            </button>

        </div>

        <p id="valorFrete"></p>

        <h2 id="totalFinal"></h2>

        <a href="cadastro.html" class="btnFinalizar">
            Finalizar Compra
        </a>

    </div>

    `;

}

function alterarQuantidade(indice, valor){

    valor = parseInt(valor);

    if(isNaN(valor) || valor < 1){
        valor = 1;
    }

    carrinho[indice].quantidade = valor;

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    carregarCarrinho();

}

function remover(indice){

    carrinho.splice(indice,1);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    carregarCarrinho();

}

function calcularFrete(total){

    const cep = document.getElementById("cep").value;

    if(cep.length < 8){

        alert("Digite um CEP válido.");

        return;

    }

    let frete = 25;

    if(total >= 300){

        frete = 0;

    }

    document.getElementById("valorFrete").innerHTML =
        "Frete: R$ " + frete.toFixed(2).replace(".", ",");

    document.getElementById("totalFinal").innerHTML =
        "Total com Frete: R$ " + (total + frete).toFixed(2).replace(".", ",");

}

carregarCarrinho();